// import React, { useContext, useState, useEffect } from 'react'
// import moment from 'moment'
// import ErrorMessage from './ErrorMessage'
// import { UserContext } from '../context/UserContext'
// import './table.css'
// import CustomerModal from './CustomerModal'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import { DataGrid } from '@mui/x-data-grid';
// // import SearchIcon from '@mui/icons-material/Search';




// const Table = () => {
//   const [token] = useContext(UserContext);
//   const [customers, setCustomer] = useState(null)
//   const [errorMessage, setErrorMessage] = useState("")
//   const [loaded, setLoaded] = useState(false)
//   const [activeModal, setActiveModal] = useState(false)
//   const [id, setId] = useState(null)

//   const [query, setQuery] = useState("")
//   console.log(query)

//   const handleUpdate = async (id) => {
//     setId(id)
//     setActiveModal(true)
//   }
//   const handleDelete = async (id) => {
//     const requestOptions = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//         "Accept": "application/json",
//       },
//     };
//     const response = await fetch(`/api/customers/${id}`, requestOptions)
//     if (!response.ok) {
//       setErrorMessage("Failed to delete customer")
//     }
//     getCustomers()
//   }

//   const getCustomers = async () => {
//     const requestOptions = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//         "Accept": "application/json",
//       },
//     };
//     const response = await fetch("/api/customers", requestOptions);
//     if (!response.ok) {
//       setErrorMessage("Something went wrong. Couldn't load the leads");
//     } else {
//       const data = await response.json();
//       setCustomer(data);
//       setLoaded(true);
//     }
//   };

//   useEffect(() => {
//     const getCustomers = async () => {
//       const requestOptions = {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + token,
//           "Accept": "application/json",
//         },
//       };
//       const response = await fetch("/api/customers", requestOptions);
//       if (!response.ok) {
//         setErrorMessage("Something went wrong. Couldn't load the Customers");
//       } else {
//         const data = await response.json();
//         setCustomer(data);
//         setLoaded(true);
//       }
//     };

//     getCustomers()
//   }, [token]);

//   const handleModal = () => {
//     setActiveModal(!activeModal)
//     getCustomers()
//     setId(null)
//   }
      
//   return (
//     <>
//       <CustomerModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
      
//       <button className="button" onClick={() => setActiveModal(true)}>
//         ສ້າງລູກຄ້າ
//         </button>
//         {/* <button className="edit" onClick={() => handleUpdate()}><EditIcon/></button>
//         <button className="del" onClick={() => handleDelete()}><DeleteForeverIcon/></button> */}
//       <button className="button">
//         ລາຍລະອຽດ
//         </button>
//         <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="search" placeholder="Search"/>
      


//       <ErrorMessage message={errorMessage} />
//       {loaded && customers ? (
//         <table className="table">
//           <thead>
//             <tr>
//               <th></th>
//               <th>date</th>
//               <th>ຊື່</th>
//               <th>ນາມສະກຸນ</th>
//               <th>ອາຍຸ</th>
//               <th>ບັດປະຈຳຕົວ</th>
//               {/* <th>ສຳມະໂນຄົວ</th>
//               <th>ໜ່ວຍ</th>
//               <th>ບ້ານ</th>
//               <th>ເມືອງ</th>
//               <th>ແຂວງ</th>
//               <th>ເບີໂທ</th>
//               <th>ຜູ້ຮັບປະກັນ</th>
//               <th>ບ້ານ-1</th>
//               <th>ເມືອງ-1</th>
//               <th>ແຂວງ-1</th>
//               <th>ເບີໂທ-1</th>
//               <th>ຍີ່ຫໍ້ລົດ</th>
//               <th>ສີ</th>
//               <th>ເລກຈັກ</th>
//               <th>ເລກຖັງ</th>
//               <th>ລາຄາລວມ</th>
//               <th>ຈ່າຍກ່ອນ</th>
//               <th>ຍັງຄ້າງ</th>
//               <th>ດອກເບ້ຍ</th>
//               <th>ສັນຍາດາວ</th>
//               <th>ຈ່າຍແຕ່ລະເດືອນ</th>*/}
//               <th>ວັນທີ່ອັບເດດຂໍ້ມູນ</th>
//               <th>Actions</th>
//             </tr>
//             </thead>
//             <tbody>
//             {customers.map((customer) => (
//               <tr key={customer.id}>
//                 <td></td>
//                 <td>{moment(customer.date_created).format("MMM Do YY")}</td>
//                 <td>{customer.first_name}</td>
//                 <td>{customer.last_name}</td>
//                 <td>{customer.age}</td>
//                 <td>{customer.but_pa_jum_tua}</td>
//                 {/* <td>{customer.sam_ma_no_khua}</td>
//                 <td>{customer.unit}</td>
//                 <td>{customer.village}</td>
//                 <td>{customer.district}</td>
//                 <td>{customer.province}</td>
//                 <td>{customer.tel}</td>
//                 <td>{customer.phu_hub_pa_kun}</td>
//                 <td>{customer.village1}</td>
//                 <td>{customer.district1}</td>
//                 <td>{customer.province1}</td>
//                 <td>{customer.tel1}</td>
//                 <td>{customer.brand}</td>
//                 <td>{customer.color}</td>
//                 <td>{customer.lek_jak}</td>
//                 <td>{customer.lek_thang}</td>
//                 <td>{customer.la_kha_luam}</td>
//                 <td>{customer.jaiy_korn}</td>
//                 <td>{customer.yang_khang}</td>
//                 <td>{customer.dorkbia}</td>
//                 <td>{customer.san_ya_dao}</td> */}
//                 <td>{moment(customer.date_last_updated).format("MMM Do YY")}</td>
//                 <td><button className="edit" onClick={() => handleUpdate(customer.id)}><EditIcon/></button>
//                 <button className="del" onClick={() => handleDelete(customer.id)}><DeleteForeverIcon/></button>
//                 </td>
//               </tr>
//             ))}
//             </tbody>
//         </table>

    
//       ) : <p>Loading...</p>
//       }

//     </>
//   )
// }

// export default Table;






/////////////////////////////////////////////////
import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ErrorMessage from "./ErrorMessage";
import CustomerModal from "./CustomerModal";
import { UserContext } from "../context/UserContext";
import "./table.css"

const Table = () => {
  const [token] = useContext(UserContext);
  const [customers, setCustomers] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [id, setId] = useState(null);

  const handleUpdate = async (id) => {
    setId(id);
    setActiveModal(true);
  };

  const handleDelete = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(`/api/customers/${id}`, requestOptions);
    if (!response.ok) {
      setErrorMessage("Failed to delete customer");
    }

    getCustomers();
  };

  const getCustomers = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch("/api/customers", requestOptions);
    if (!response.ok) {
      setErrorMessage("Something went wrong. Couldn't load the customers");
    } else {
      const data = await response.json();
      setCustomers(data);
      setLoaded(true);
    }
  };

  useEffect(() => {
    getCustomers();
  }, [""]);

  const handleModal = () => {
    setActiveModal(!activeModal);
    getCustomers();
    setId(null);
  };

  return (
    <>
      <CustomerModal
        active={activeModal}
        handleModal={handleModal}
        token={token}
        id={id}
        setErrorMessage={setErrorMessage}
      />
      <button
        className="button"
        onClick={() => setActiveModal(true)}
      >
        Create Lead
      </button>
      <ErrorMessage message={errorMessage} />
      {loaded && customers ? (
        <table className="table">
          <thead>
          <tr>
              <th></th>
               <th>ວັນທີ່ສ້າງ</th>
               <th>ຊື່</th>
               <th>ນາມສະກຸນ</th>
               <th>ອາຍຸ</th>
               <th>ບັດປະຈຳຕົວ</th>
               <th>ສຳມະໂນຄົວ</th>
               <th>ໜ່ວຍ</th>
               <th>ບ້ານ</th>
               <th>ເມືອງ</th>
               <th>ແຂວງ</th>
               <th>ເບີໂທ</th>
               {/* <th>ຜູ້ຮັບປະກັນ</th>
               <th>ບ້ານ-1</th>
               <th>ເມືອງ-1</th>
               <th>ແຂວງ-1</th>
               <th>ເບີໂທ-1</th>
               <th>ຍີ່ຫໍ້ລົດ</th>
               <th>ສີ</th>
               <th>ເລກຈັກ</th>
               <th>ເລກຖັງ</th>
               <th>ລາຄາລວມ</th>
               <th>ຈ່າຍກ່ອນ</th>
               <th>ຍັງຄ້າງ</th>
               <th>ດອກເບ້ຍ</th>
               <th>ສັນຍາດາວ</th> 
               <th>ຈ່າຍແຕ່ລະເດືອນ</th>*/}
               <th>ວັນທີ່ອັບເດດຂໍ້ມູນ</th>
               <th>Actions</th>
             </tr>
          </thead>
          <tbody>
          {customers.map((customer) => (               
                    <tr key={customer.id}><td></td>
                    <td>{moment(customer.date_created).format("MMM Do YY")}</td>
                    <td>{customer.first_name}</td>
                    <td>{customer.last_name}</td>
                    <td>{customer.age}</td>
                    <td>{customer.but_pa_jum_tua}</td>
                    <td>{customer.sam_ma_no_khua}</td>
                    <td>{customer.unit}</td>
                    <td>{customer.village}</td>
                    <td>{customer.district}</td>
                    <td>{customer.province}</td>
                    <td>{customer.tel}</td>
                    {/* <td>{customer.phu_hub_pa_kun}</td>
                    <td>{customer.village1}</td>
                    <td>{customer.district1}</td>
                    <td>{customer.province1}</td>
                    <td>{customer.tel1}</td>
                    <td>{customer.brand}</td>
                    <td>{customer.color}</td>
                    <td>{customer.lek_jak}</td>
                    <td>{customer.lek_thang}</td>
                    <td>{customer.la_kha_luam}</td>
                    <td>{customer.jaiy_korn}</td>
                    <td>{customer.yang_khang}</td>
                    <td>{customer.dorkbia}</td>
                    <td>{customer.san_ya_dao}</td> */}
                    <td>{moment(customer.date_last_updated).format("MMM Do YY")}</td>
                  
                    <EditIcon className="edit" onClick={() => handleUpdate(customer.id)}/>
                    <DeleteForeverIcon className="del" onClick={() => handleDelete(customer.id)}/>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Table;
 