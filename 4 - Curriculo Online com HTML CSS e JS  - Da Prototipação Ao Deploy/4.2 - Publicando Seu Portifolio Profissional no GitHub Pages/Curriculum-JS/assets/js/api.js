// Esperando puxar o JSON profile do GitHub
    async function fetchProfileData()
    {
        const URL = 'https://raw.githubusercontent.com/gsfranca/Curriculum-JS/master/data/profile.json'
        const FETCHING = await fetch(URL)
        return await FETCHING.json()
    }
