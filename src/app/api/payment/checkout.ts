import { prisma } from "@/database/client";
import { NextResponse } from "next/server";
import mercadopago from "mercadopago";
import type {
  CreatePreferencePayload,
  PreferencePayer,
  PreferenceBackUrl,
} from "mercadopago/models/preferences/create-payload.model";

export async function POST(request: Request) {
  const checkout = await request.json();

  if (!checkout)
    return NextResponse.json(
      { error: "There isn't enough info to execute the checkout" },
      { status: 400 }
    );

  mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN as string,
  });

  const preference: CreatePreferencePayload = {
    binary_mode: true,
    items: [
      {
        title: `Jackaro`,
        description: `Nombre de la prenda`,
        picture_url: "url de imagen",
        quantity: 1 as number,
        currency_id: "ARS",
        unit_price: 900 as number,
      },
    ],
    payer: {
      name: "Nombre" as string,
      surname: "Nombre Completo".split(" ")[1] ?? ("Jackaro" as string),
      email: "Email" as string,
    } as PreferencePayer,
    back_urls: {
      success: "https://jackaro.ar/checkout/sucess",
      failure: "https://jackaro.ar/checkout/failure",
      pending: "https://jackaro.ar/checkout/pending",
    } as PreferenceBackUrl,
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return NextResponse.json({ global: response.body.id }, { status: 200 });
    })
    .catch((error) => {
      return NextResponse.json({ global: error }, { status: 500 });
    });
}
