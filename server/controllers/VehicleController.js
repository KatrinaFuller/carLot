import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import Axios from "axios";
import VehicleService from '../services/VehicleService.js';

let _vehicleService = new VehicleService().repository

export default class VehicleController {
  constructor() {
    this.router = express.Router()
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Authorize.authenticated)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.delete)
      .use(this.defaultRoute)
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: 'No such route' })
  }

  async getAll(req, res, next) {
    try {
      let data = await _vehicleService.find({})
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let data = await _vehicleService.findById(req.params.id)
      if (!data) {
        throw new Error("Invalid Id")
      }
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    req.body.authorId = req.session.uid
    try {
      let data = await _vehicleService.create(req.body)
      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _vehicleService.findOneAndUpdate({ _id: req.params.id, }, req.body, { new: true })
      if (data) {
        return res.send(data)
      }
      throw new Error("Invalid Id")
    } catch (error) {
      next(error)
    }
  }










}