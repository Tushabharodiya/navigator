import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PENDING, GET_PRODUCT_PENDING, POST_PRODUCT_PENDING, UPDATE_PRODUCT_PENDING } from "./redux_saga/admin/action";

function App() {

  let product = useSelector((state) => state.adminReducer)
  // console.log(product);

  let dispatch = useDispatch();
  let name = useRef()
  let price = useRef()
  let desc = useRef()
  const [view, setview] = useState({})
  const [model, setmodel] = useState("none")

  //get Product
  useEffect(() => {
    dispatch({ type: GET_PRODUCT_PENDING })
  }, [])

  //add Product
  let addproduct = () => {
    let product = {
      name: name.current.value,
      price: price.current.value,
      desc: desc.current.value,
    }
    dispatch({ type: POST_PRODUCT_PENDING, payload: product })
  }

  //remove
  let remove = (id) => {
    dispatch({ type: DELETE_PRODUCT_PENDING, payload: id })
  }

  //update
  let viewdata = (val) => {
    setview(val)
    setmodel("block")
  }

  let handleview = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }

  let save = () => {
    dispatch({ type: UPDATE_PRODUCT_PENDING, payload: view })
    setmodel("none")
  }

  return (
    <>
      <div className="getbox">
        <div className="box">
          <label>name : <input type="text" name="name" ref={name} /></label>
          <label>price : <input type="number" name="price" ref={price} /></label>
          <label>descrition : <input type="text" name="desc" ref={desc} /></label>
          <button onClick={addproduct}>add Product</button>
        </div>
      </div>

      <div className="model" style={{ display: `${model}` }}>
        <label>name : <input type="text" name="name" value={view.name} onChange={handleview} /></label>
        <label>price : <input type="number" name="price" value={view.price} onChange={handleview} /></label>
        <label>descrition : <input type="text" name="desc" value={view.desc} onChange={handleview} /></label>
        <button onClick={save}>save Product</button>
      </div>

      <table border="1px" cellPadding="10px" >
        <thead>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>desc</th>
            <th>delete</th>
            <th>update</th>
          </tr>
        </thead>
        <tbody>
          {
            product.product?.map((val, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.desc}</td>
                    <td><button onClick={() => remove(val.id)}>delete</button></td>
                    <td><button onClick={() => viewdata(val)}>view</button></td>
                  </tr>
                </React.Fragment>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
