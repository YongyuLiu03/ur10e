
"use strict";

let GetRobotMode = require('./GetRobotMode.js')
let Load = require('./Load.js')
let IsProgramRunning = require('./IsProgramRunning.js')
let GetLoadedProgram = require('./GetLoadedProgram.js')
let Popup = require('./Popup.js')
let GetProgramState = require('./GetProgramState.js')
let IsProgramSaved = require('./IsProgramSaved.js')
let RawRequest = require('./RawRequest.js')
let IsInRemoteControl = require('./IsInRemoteControl.js')
let GetSafetyMode = require('./GetSafetyMode.js')
let AddToLog = require('./AddToLog.js')

module.exports = {
  GetRobotMode: GetRobotMode,
  Load: Load,
  IsProgramRunning: IsProgramRunning,
  GetLoadedProgram: GetLoadedProgram,
  Popup: Popup,
  GetProgramState: GetProgramState,
  IsProgramSaved: IsProgramSaved,
  RawRequest: RawRequest,
  IsInRemoteControl: IsInRemoteControl,
  GetSafetyMode: GetSafetyMode,
  AddToLog: AddToLog,
};
