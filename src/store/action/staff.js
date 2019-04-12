import * as TYPES from '../action-types';


let staff = {
    //add staff,payload(id,name)
    // create(payload){
    //     //thunk中间件的使用语法，在指定3000ms后再派发
    //     return dispatch => {
    //         setTimeout(() => {
    //             dispatch({
    //                 type: TYPES.STAFF_CREATE,
    //                 payload
    //             })
    //         }, 3000);
    //     }
    // }
    create(payload){
        //promise中间件语法
        return {
                    type: TYPES.STAFF_CREATE,
                    //传递给reducer的payload需要等待promise成功，把成功的结果传递进去。
                    payload: new Promise(resolve => {
                        setTimeout(() => {
                            resolve(payload);
                        }, 3000);
                    })
        }
    }
}
export default staff;

