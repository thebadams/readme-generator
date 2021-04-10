const prompt_authorName = {
    type: "input",
    name: "authorName",
    message: "What is your name?"
};

const prompt_githubUserName = {
    type: "input",
    name: "githubUserName",
    message: "What is your GitHub username?"
};

const prompt_authorEmail = {
    type: "input",
    name: "authorEmail",
    message: "What is your e-mail address?"
};

const authorPrompts = [prompt_authorName, prompt_githubUserName, prompt_authorEmail];

export {authorPrompts}