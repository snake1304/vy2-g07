import carService from "../services/carSevice";

let handleGetAllCars=async(req,res)=>{

    let id= req.query.id;
    let cars= await carService.getAllCars(id);
    console.log(cars);

    return res.status(200).json({
        errCode:0,
        errMessage:'oke',
        cars})
    // return  res.end(
    //     JSON.stringify({
    //      cars
    //     })
    //   );
    
}
let getDetailCarById = async(req,res)=>{
    try {
        let infor = await carService.getDetailCarById(req.query.id);
        return res.status(200).json(
            infor
        )
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode:0,
            errMessage:'error',
            })
    }
}
let handleCreateNewCar= async (req,res)=>{
    try {
        let message = await carService.createNewCar(req.body);
        console.log(req.body)
        console.log(message);
        return res.status(200).json(message);
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode:0,
            errMessage:'error',
            })
    }
}

module.exports={

    handleGetAllCars:handleGetAllCars,
    getDetailCarById:getDetailCarById,
    handleCreateNewCar:handleCreateNewCar
}