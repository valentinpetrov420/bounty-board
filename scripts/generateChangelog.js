import fs from "fs";

const OWNER = "valentinpetrov420";
const REPO = "questlog";

async function run() {
    const response = await fetch(
        `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=100`,
        {
            headers: {
                Accept: "application/vnd.github+json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch commits");
    }

    const data = await response.json();

    const commits = data.map((c) => ({
        message: c.commit.message,
        date: c.commit.author.date
    }));

    fs.writeFileSync(
        "public/changelog.json",
        JSON.stringify(commits, null, 2)
    );
}

run();