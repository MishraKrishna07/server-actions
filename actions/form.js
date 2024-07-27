"use server"
import fs from "fs/promises"
export const SubmitActions = async (e) => {
    "use server"
    console.log(e.get("name"), e.get("add"))
    let a = await fs.writeFile("krishna.txt", `Name is ${e.get("name")} and Address is ${e.get("add")}`)
    console.log(a)
}