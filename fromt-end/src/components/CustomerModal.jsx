import React, { useState,useEffect } from 'react'

const CustomerModal = ({active,handleModal,token,id,setErrorMessage})=>{
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [age,setAge] = useState("")
    const [butpajumtua,setButpajumtua] = useState("")
    const [sammanokhua,setFSammanokhua] = useState("")
    const [unit,setUnit] = useState("")
    const [village,setVillage] = useState("")
    const [district,setDistrict] = useState("")
    const [province,setProvince] = useState("")
    const [tel,setTel] = useState("")
    const [phuhubpakun,setPhuhubpakun] = useState("")
    const [village1,setVillage1] = useState("")
    const [district1,setDistrict1] = useState("")
    const [province1,setProvince1] = useState("")
    const [tel1,setTel1] = useState("")
    const [brand,setBrand] = useState("")
    const [color,setColor] = useState("")
    const [lekjak,setLekjak] = useState("")
    const [lekthang,setLekthang] = useState("")
    const [lakhaluam,setLakhaluam] = useState("")
    const [jaiykorn,setJaiykorn] = useState("")
    const [yangkhang,setYangkhang] = useState("")
    const [dorkbia,setDorkbia] = useState("")
    const [sanyadao,setSanyadao] = useState("")
    const [jaiytalaedeuan,setJaiytaeladeuan] = useState("")

    useEffect(()=>{
        const getCustomer = async () =>{
        const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Accept":"application/json",
            },
        }
        const response = await fetch(`/api/customers/${id}`, requestOptions);

            if (!response.ok) {
            setErrorMessage("Could not get the customer");
            } else {
                const data = await response.json();
                    setFirstName(data.first_name)
                    setLastName(data.last_name)
                    setAge(data.age)
                    setButpajumtua(data.but_pa_jum_tua)
                    setFSammanokhua(data.sam_ma_no_khua)
                    setUnit(data.unit)
                    setVillage(data.village)
                    setDistrict(data.district)
                    setProvince(data.province)
                    setTel(data.tel)
                    setPhuhubpakun(data.phu_hub_pa_kun)
                    setVillage(data.village1)
                    setDistrict1(data.district1)
                    setProvince1(data.province1)
                    setTel1(data.tel1)
                    setBrand(data.brand)
                    setColor(data.color)
                    setLekjak(data.lek_jak)
                    setLekthang(data.lek_thang)
                    setLakhaluam(data.la_kha_luam)
                    setJaiykorn(data.jaiy_korn)
                    setYangkhang(data.yang_khang)
                    setDorkbia(data.dorkbia)
                    setSanyadao(data.san_ya_dao)
                    setJaiytaeladeuan(data.jaiy_tae_la_deuan)

                }
            };

        if (id) {
            getCustomer();
        }
        else{
            setErrorMessage(console.error())
        }
        }, [id, token]);


    const cleanFormData =() =>{
        setFirstName("")
        setLastName("")
        setAge("")
        setButpajumtua("")
        setFSammanokhua("")
        setUnit("")
        setVillage("")
        setDistrict("")
        setProvince("")
        setTel("")
        setPhuhubpakun("")
        setVillage1("")
        setDistrict1("")
        setProvince1("")
        setTel1("")
        setBrand("")
        setColor("")
        setLekjak("")
        setLekthang("")
        setLakhaluam("")
        setJaiykorn("")
        setYangkhang("")
        setDorkbia("")
        setSanyadao("")
        setJaiytaeladeuan("")
    }
    const handleCreateCustomer = async (e) =>{
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Accept":"application/json",
            },
            body: JSON.stringify({
              first_name: firstName,
              last_name: lastName,
              age: age,
              but_pa_jum_tua:butpajumtua,
              sam_ma_no_khua:sammanokhua,
              unit: unit,
              village: village,
              district:district,
              province:province,
              tel:tel,
              phu_hub_pa_kun:phuhubpakun,
              village1:village1,
              district1:district1,
              province1:province1,
              tel1:tel1,
              brand:brand,
              color:color,
              lek_jak:lekjak,
              lek_thang:lekthang,
              la_kha_luam:lakhaluam,
              jaiy_korn:jaiykorn,
              yang_khang:yangkhang,
              dorkbia:dorkbia,
              san_ya_dao:sanyadao,
              jaiy_tae_la_deuan:jaiytalaedeuan,
            }),
          };


          const response = await fetch("/api/customers",requestOptions)
       
          if(!response.ok){
              setErrorMessage()
          }else{
            cleanFormData();
            handleModal()
          }
    }
    const handleUpdateCustomer = async (e) =>{
        e.preventDefault()
        const requestOptions = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
              "Accept":"application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                age: age,
                but_pa_jum_tua:butpajumtua,
                sam_ma_no_khua:sammanokhua,
                unit: unit,
                village: village,
                district:district,
                province:province,
                tel:tel,
                phu_hub_pa_kun:phuhubpakun,
                village1:village1,
                district1:district1,
                province1:province1,
                tel1:tel1,
                brand:brand,
                color:color,
                lek_jak:lekjak,
                lek_thang:lekthang,
                la_kha_luam:lakhaluam,
                jaiy_korn:jaiykorn,
                yang_khang:yangkhang,
                dorkbia:dorkbia,
                san_ya_dao:sanyadao,
                jaiy_tae_la_deuan:jaiytalaedeuan,
              }),
    }
    const response = await fetch(`/api/customers/${id}`, requestOptions)
    if (!response.ok){
        setErrorMessage("Something went wrong when updating customer")
    }else{
        cleanFormData()
        handleModal()
    }
}
    return (
        <div className={`modal ${active && "is-active"}`}>
      <div className="modal-background" onClick={handleModal}></div>
      <div className="modal-card">
        <header className="modal-card-head has-background-primary-light">
          <h1 className="modal-card-title">
            {id ? "ອັບເດດລູກຄ້າ" : "ສ້າງລູກຄ້າ"}
          </h1>
        </header>
                <section className="modal-card-body">
                    <form>
                        <div className="field">
                            <label className="label">ຊື່</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ຊື່" 
                                value={firstName} 
                                onChange={(e)=>setFirstName(e.target.value)} 
                                className="input" 
                                required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ນາມສະກຸນ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ນາມະກຸນ" 
                                value={lastName} onChange={(e)=>setLastName(e.target.value)} 
                                className="input" 
                                required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ອາຍຸ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ອາຍຸ" value={age} 
                                onChange={(e)=>setAge(e.target.value)} 
                                className="input" 
                                required/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ບັດປະຈຳຕົວ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ບັດປະຈຳຕົວ" 
                                value={butpajumtua} 
                                onChange={(e)=>setButpajumtua(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ສຳມະໂນຄົວ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ສຳມະໂນຄົວ" 
                                value={sammanokhua} 
                                onChange={(e)=>setFSammanokhua(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ໜ່ວຍທີ່</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ໜ່ວຍທີ່" 
                                value={unit} 
                                onChange={(e)=>setUnit(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ບ້ານ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ບ້ານ" 
                                value={village} 
                                onChange={(e)=>setVillage(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເມືອງ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ເມືອງ" 
                                value={district} 
                                onChange={(e)=>setDistrict(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ແຂວງ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ແຂວງ" 
                                value={province} 
                                onChange={(e)=>setProvince(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເບີໂທ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ເບີໂທ" 
                                value={tel} 
                                onChange={(e)=>setTel(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ຜູ້ຮັບປະກັນ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ຜູ້ຮັບປະກັນ" 
                                value={phuhubpakun} 
                                onChange={(e)=>setPhuhubpakun(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ບ້ານ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ບ້ານ" 
                                value={village1} 
                                onChange={(e)=>setVillage1(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເມືອງ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ເມືອງ" 
                                value={district1} 
                                onChange={(e)=>setDistrict1(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ແຂວງ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ແຂວງ" 
                                value={province1} 
                                onChange={(e)=>setProvince1(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເບີໂທ</label>
                            <div className="control">
                                <input 
                                type="tel" 
                                placeholder="ເບີໂທ" 
                                value={tel1} 
                                onChange={(e)=>setTel1(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ຍີ່ຫໍ້ລົດ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ຍີ່ຫໍ້ລົດ" 
                                value={brand} 
                                onChange={(e)=>setBrand(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ສີລົດ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ສີລົດ" 
                                value={color} 
                                onChange={(e)=>setColor(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເລກຈັກ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ເລກຈັກ" 
                                value={lekjak} 
                                onChange={(e)=>setLekjak(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ເລກຖັງ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ເລກຖັງ" 
                                value={lekthang} 
                                onChange={(e)=>setLekthang(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ລາຄາລົດ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ລາຄາລົດ" 
                                value={lakhaluam} 
                                onChange={(e)=>setLakhaluam(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ຈ່າຍກ່ອນ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ຈ່າຍກ່ອນ" 
                                value={jaiykorn} 
                                onChange={(e)=>setJaiykorn(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ຍັງຄ້າງ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ຍັງຄ້າງ" 
                                value={yangkhang} 
                                onChange={(e)=>setYangkhang(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ດອກເບ້ຍ</label>
                            <div className="control">
                                <input 
                                type="number"
                                placeholder="ດອກເບ້ຍ" 
                                value={dorkbia} 
                                onChange={(e)=>setDorkbia(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ສັນຍາດາວ</label>
                            <div className="control">
                                <input 
                                type="text" 
                                placeholder="ສັນຍາດາວ" 
                                value={sanyadao} 
                                onChange={(e)=>setSanyadao(e.target.value)} 
                                className="input"/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">ຈ່າຍແຕ່ລະເດືອນ</label>
                            <div className="control">
                                <input 
                                type="number" 
                                placeholder="ຈ່າຍແຕ່ລະເດືອນ" 
                                value={jaiytalaedeuan} 
                                onChange={(e)=>setJaiytaeladeuan(e.target.value)} 
                                className="input" />
                            </div>
                        </div>
                        
                    </form>
                </section>
                <footer className="modal-card-foot has-background-primary-light">
          {id ? (
            <button className="button is-info" onClick={handleUpdateCustomer}>
              Update
            </button>
          ) : (
            <button className="button is-primary" onClick={handleCreateCustomer}>
              Create
            </button>
          )}
          <button className="button" onClick={handleModal}>
            Cancel
          </button>
        </footer>
            </div>
        </div>
    )
}

export default CustomerModal;