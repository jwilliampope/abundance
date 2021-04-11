let emailCollector = document.getElementById("emailCollector")
emailCollector.addEventListener("submit", e => {
  e.preventDefault()
  let ourFormData = new FormData(e.target)
  let userFirstName = ourFormData.get("firstName")
  let updatedHtmlContent = `
 
  <h2> Congratulations, ${userFirstName}!</h2>
  <p>You have rejected scarcity and embraced abundance!</p>
  <p>You have been heard.</p>
 
  `

  let ourMainContent = document.getElementById("mainContent")
  ourMainContent.innerHTML = updatedHtmlContent
})
