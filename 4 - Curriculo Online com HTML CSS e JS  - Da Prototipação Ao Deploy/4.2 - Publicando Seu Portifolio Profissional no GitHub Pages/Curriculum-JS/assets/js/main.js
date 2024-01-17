/*Mostra as informações do Header*/
    function updateProfileInfo(profileDATA)
    {
        /*Informações do Header*/
            const PHOTO = document.getElementById('profile.photo')
            const NAME = document.getElementById('profile.name')
            const JOB = document.getElementById('profile.job')
            const LOCATION = document.getElementById('profile.location')
            const EMAIL = document.getElementById('profile.email')
            const PHONE = document.getElementById('profile.phone')

        /*Converter JSON em String sem espaço e Caracter Especiais*/

            // Pega o arquivo JSON
                const phoneJSON = profileDATA.phone 
            
            // Converte pra String
                const phoneToSTRING = JSON.stringify(phoneJSON) 

            // Tira caracteres especiais e espaços
                const phoneToLINK = phoneToSTRING.replace(/[-()"" ]/g, ''); 

        /*Fim da COnversão*/

        /*Carregar Foto*/
            PHOTO.src = profileDATA.photo
            PHOTO.alt = profileDATA.name

        /*Carregar Nome*/
            NAME.innerText = profileDATA.name

        /*Carregar Cargo*/
            JOB.innerText = profileDATA.job

        /*Carregar Localização*/
            LOCATION.innerText = profileDATA.location

        /*Carregar Email*/
            EMAIL.innerText = profileDATA.email
            EMAIL.href = `mailto:${profileDATA.email}`

        /*Carregar Telefone*/ 
            PHONE.innerText = profileDATA.phone
            PHONE.href = `https://wa.me/55${phoneToLINK}`
    }

/*Mostra as informações do skills*/
    function updateSkillsInfo(profileDATA)
    {
        const softSKILLS = document.getElementById('profile.skills.softSkills')
        softSKILLS.innerHTML = profileDATA.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

        const hardSKILLS = document.getElementById('profile.skills.hardSkills')
        hardSKILLS.innerHTML = profileDATA.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}"></img></li>`).join('')
    }

/*Mostrar as informações de idioma*/
    function updateLanguageInfo(profileDATA)
    {
        const LANGUAGES = document.getElementById('profile.languages')
        LANGUAGES.innerHTML = profileDATA.languages.map(language => `<li>${language}</li>`).join('')
    }

/*Mostrar as informações do portifolio*/
    function updatePortifolioInfo(profileDATA)
    {
        const PORTIFOLIO = document.getElementById('profile.portifolio')
        PORTIFOLIO.innerHTML = profileDATA.portfolio.map(project => {
                return `
                <li>
                    <h3 ${project.github ? 'class="github"': ''}>${project.name}</h3>
                    <a href="${project.url}" target="_blank">${project.url}</a>
                </li>
                `
            }
        ).join('')
    }

/*Mostrar as informações de Experencia*/
    function updateExperienceInfo(profileDATA)
    {
        const EXPERIENCE = document.getElementById('profile.experience')
        EXPERIENCE.innerHTML = profileDATA.professionalExperience.map(experience => {
                return `
                <li>
                    <h3 class="title">${experience.name}</h3>
                    <p class="period">${experience.period}</p>
                    <p>${experience.description}</p>
                </li>
                `
            }
        ).join('')
    }
/*Executar funções*/
    (async () =>
    {
        const profileDATA = await fetchProfileData()
        updateProfileInfo(profileDATA)
        updateSkillsInfo(profileDATA)
        updateLanguageInfo(profileDATA)
        updatePortifolioInfo(profileDATA)
        updateExperienceInfo(profileDATA)
    })()