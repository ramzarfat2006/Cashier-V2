import sequelize from "@/config/database";
import UserService from "@/service/UserService";
import User from "@/model/user";
import bcrypt from "bcrypt";

export default async function POST(req,res){
    try{
        const userService = new UserService(sequelize, User)

        const username = req.body.username
        const password = req.body.password

        const result = await userService.find(username)

        if(result.length == 0){
            return res.status(200).json({
                message: "User belum terdaftar, silahkan register dulu",
                status: "fail"
            })
        }

        const hash = result[0].password

        const cekPassword = bcrypt.compareSync(password, hash)

        if(!cekPassword){
            return res.status(400).json({
                message: "Password salah",
                status: "fail"
            })
        }

        return res.status(200).json({
            message: "Berhasil login",
            status: "success"
        })

    } catch(error){
        return res.status(500).json({
            status: "fail",
            message: `Terdapat error ${error}`
        })
    }
}