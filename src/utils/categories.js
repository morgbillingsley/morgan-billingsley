
export const categorize = (edges) => {
    let articles = {};
    for (const edge of edges) {
        const { node } = edge;
        const { category } = node.frontmatter;
        if (undefined !== articles[category]) {
            articles[category].push(node);
        } else {
            articles[category] = [node];
        }
    }
    return articles;
}