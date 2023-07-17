import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: "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",
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request, res: NextResponse) {
	const body = await req.json();

	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: body.messages,
	});
	console.log(completion.data.choices[0].message);
	const theResponse = completion.data.choices[0].message;

	return NextResponse.json({ output: theResponse }, { status: 200 });
}
