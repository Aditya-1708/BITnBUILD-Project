import OpenAI from "openai";
import { openAIapikey } from '../env.js';

const schema = {
    type: "object",
    properties: {
        indexes: {
            type: "array",
            items: {
                type: "integer"
            },
        }
    },
    required: ["indexes"]
};

async function askAI(content) {
    try {
        const openai = new OpenAI({ apiKey: openAIapikey });
        const chatCompletion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ "role": "system", "content": "You are an AI event and hackathon suggester" },
            { "role": "user", "content": `The skills of the user are ${content[0]}` }, { "role": "user", "content": `suggest me the ones that match and are similar to my skills` }],
            functions: [{ name: 'get_suggestions', "parameters": schema }],
        });

        if (chatCompletion.choices.length > 0) {
            return chatCompletion.choices[0].message.function_call.arguments;
        } else {
            console.error("No choices returned by OpenAI API");
            return null;
        }
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
export default askAI;

