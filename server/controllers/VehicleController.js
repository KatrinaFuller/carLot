import express from 'express'
import { Authorize } from '../middleware/authorize.js'
import Axios from "axios";
import VehicleService from '../services/VehicleService.js';

let _vehicleService = new VehicleService().repository

export default class VehicleController {
  constructor() {
    this.router = express.Router()
      .use(Authorize.authenticated)
      .get('', this.getAll)
      .get('/:id', this.getById)
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










}