import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<Response> {
  const formData = await request.formData();

  const  WEB3FORMS_KEY  = process.env.WEB3FORMS;

  if (!WEB3FORMS_KEY) {
    return NextResponse.json({ message: 'API Key missing' }, { status: 500 });
  }
    formData.append("access_key", "8dd2f85a-06a1-479d-ac08-93778f7bddf2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}