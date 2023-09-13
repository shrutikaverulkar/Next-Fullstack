import { connectDB } from "@/lib/mongo";
import Todo from "@/models/Todo";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextApiRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        console.log(params);

        await connectDB()
        const result = await Todo.findByIdAndDelete(id)

        return NextResponse.json({
            message: "todo delete success",
            result
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}
export const PUT = async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
        const { id } = params
        const body = await req.json()
        await connectDB()
        const result = await Todo.findByIdAndUpdate(id, body)
        return NextResponse.json({
            message: "todo update success",
            result
        }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 500 })
    }
}