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

const prompt_appTitle = {
    type: "input",
    name: "appTitle",
    message: "What is the name of your Application?"
}

const prompt_appDescr = {
    type: "input",
    name: "appDescr",
    message: "Please give a brief description of the application"
}

const prompt_appMotivation = {
    type: "input",
    name: "appMotivation",
    message: "What was your motivation for developing this application?"
}

const prompt_appWhy = {
    type: "input",
    name: "appWhy",
    message: "Why did you decide to build this application?"
}

const prompt_appSolve = {
    type: "input",
    name: "appSolve",
    message: "What problem did this application aim to solve?"
}

const prompt_appLessons = {
    type: "input",
    name: "appLessons",
    message: "What did you learn by developing this application?"
}

const appInfoPrompts = [prompt_appTitle, prompt_appDescr, prompt_appMotivation, prompt_appWhy, prompt_appSolve, prompt_appLessons]

export {authorPrompts, appInfoPrompts}