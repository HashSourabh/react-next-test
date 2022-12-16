import React, {useState} from "react";
import {Lock, Info} from "./SvgIcon";

export default function Modal({show, closeModal}) {
  const [state,setState] = useState({
    max_fee_gwei:'',
    gas_limit:'',
    max_fee:''
  })
  const [advancedEnabled, setAdvancedEnabled] = useState(false)
  const [gasLimit, setGasLimit] = useState(true)
  const inputHandle = (event)=>{
      if(event.target.name == 'max_fee_gwei'){
          // setState(preState => ({ ...preState.state, max_fee_gwei:event.target.value}))
          // setState(prevState => ({
          //   ...prevState,
          //   max_fee_gwei: event.target.value
          // }));
          setState({...state,max_fee_gwei: event.target.value})
          console.log(state, 'event.target.value.target.valueevent.target.valueevent.target.value')
      }else if(event.target.name == 'gas_limit'){
        setState({...state, gas_limit: event.target.value})
      }
      setState(prevState => ({
        ...prevState,
        max_fee: state.max_fee_gwei * state.gas_limit
      }));
  }

  const calculateMaxFee = () => {
      // setState({...state, max_fee:(state.max_fee_gwei * state.gas_limit)});
      setState(prevState => ({
        ...prevState,
        max_fee: state.max_fee_gwei * state.gas_limit
      }));
      console.log(state.max_fee_gwei,'1', state.gas_limit,'2' ,state.max_fee,'3');
  }
  return (
    <>
      {show ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 rounded-t">
                  <h3 className="text-md font-semibold">
                    Gas Settings
                  </h3> 
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <form>
                    <p className="font-bold text-xl text-center mb-3">{`~${state.max_fee}`}</p>
                    <div className="flex flex-row justify-between">
                      <div>
                        <span className="text-sm"><label className="font-semibold ">Max Fee:</label> {state.max_fee}</span>
                      </div>
                      <div className="text-sm">{'$0.0'}</div>
                    </div>
                    <div className="my-4">
                      <label className="font-semibold block mb-3 text-sm">Priority</label>
                      <div className="flex flex-row justify-center">
                        <div className="relative mx-1">
                          <input type="radio" name="priority" className="peer absolute opacity-0 checked:bg-blue-500" id="low"/>
                          <label for="low" className="rounded-lg font-medium text-sm inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border-gray-400 rounded peer-checked:bg-blue-600 peer-checked:text-white">Low</label>
                        </div>
                        <div className="relative mx-1">
                          <input type="radio" name="priority" className="peer absolute opacity-0 checked:bg-blue-500" id="medium" />
                          <label for="medium" className="rounded-lg font-medium text-sm inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border-gray-400 rounded peer-checked:bg-blue-600 peer-checked:text-white">Medium</label>
                        </div>
                        <div className="relative mx-1">
                          <input type="radio" name="priority" className="peer absolute opacity-0 checked:bg-blue-500" id="high"/>
                          <label for="high" className="rounded-lg font-medium text-sm inline-block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border-gray-400 rounded peer-checked:bg-blue-600 peer-checked:text-white" >High</label>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex flex-row justify-between">
                      <label className="font-semibold block text-sm">Advanced Options</label>
                      <div>
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={advancedEnabled}
                            readOnly
                        />
                        <div
                            onClick={() => {
                                setAdvancedEnabled(!advancedEnabled);
                            }}
                            className="relative w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
                        ></div>
                      </div>
                    </div>
                    {advancedEnabled && (
                      <>
                      <div className="mb-3">
                        <label className="flex items-center justify-start text-sm mb-1">
                        <Info width="14" height="14" fill="#a1aab6" className="mr-1"/>
                          Max Priority Fee (GWEI)
                        </label>
                        <div className="relative">

                          <input type="text" name="max_priority_fee" className="block bg-white w-full bg-slate-100 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
                          <div type="button" className="flex items-center opacity-50 absolute top-0 h-full px-2 text-sm right-0 z-10">$0.0</div>
                      </div>
                      </div>

                      <div className="mb-3">
                        <label className="flex items-center justify-start text-sm mb-1">
                        <Info width="14" height="14" fill="#a1aab6" className="mr-1"/>
                          Max Fee (GWEI)
                          </label>
                        <div className="relative">

                        <input onChange={inputHandle} onKeyUp={inputHandle} type="text" name="max_fee_gwei" className="block bg-white w-full bg-slate-100 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
                        <div type="button" className="flex items-center opacity-50 absolute top-0 h-full px-2 text-sm right-0 z-10">$0.0</div>
                      </div>
                      </div>
                      <div className="mb-0">
                        <label className="flex items-center justify-start text-sm mb-1">
                          <Lock width="14" height="14" fill="#a1aab6" className="mr-1"/>
                          Gas Limit
                        </label>
                        <div className="relative">
                          <input onChange={inputHandle} onKeyUp={inputHandle} type="text" disabled={gasLimit} name="gas_limit" className="block w-full bg-slate-100 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"/>
                          <button type="button" className="absolute text-blue-600 font-medium top-0 h-full px-2 text-sm right-0 z-10" onClick={()=>{setGasLimit(!gasLimit)}}>Edit</button>
                        </div>
                      </div>
                      </>
                    )}
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-3 pt-0 rounded-b">
                  <button
                    className="w-full bg-blue-600 text-white active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={event => closeModal(false)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}