import { product } from "@/types/product";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);


export async function POST(req: Request) {
    try {
        const body = await req.json(); 
        const { product } = body; 

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: product.map((i:product)=>
                ({
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: i.name,
                            images:[i.image]
                        },
                        unit_amount: i.price * 100, 
                    },
                    quantity: i.quantity, 
                })),
            
            mode: "payment",
            success_url: `${req.headers.get("origin")}/success`,
            cancel_url: `${req.headers.get("origin")}/cancel`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
    return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 }
    );
}