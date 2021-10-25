// objeto para guardar as variaveis a serem usadas
const LinksSocialMedia = {
  github: 'PedroV1dal',
  youtube: 'UCmKKeKgaBZAK05BQck1FVOA',
  facebook: 'pedrovidal0',
  instagram: 'PedroVidal0',
  twitter: 'PedroVidal0'
}

function changeSocialMediaLinks() {
  //Vai pegar cada filho do elemento HTML, nesse caso os filhos da ul, os li
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    // É necessario escolher qual filho você quer, pois no codigo a li possuí 2 filhos

    // lembrando que o computado começa a contar a partir do 0, então o href está na tag <a> que seria a posição 0
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
