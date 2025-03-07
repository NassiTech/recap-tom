const fetchGitWorkflowImage = async () => {
  const imagePath ="./images/git/Git_Workflow.png" ;
  const gitDocuContainer = document.getElementById("gitDocuContainer");
  // Image in den gitDocuContainer einfüge (TIPP: .innerHTML)
  // Das Image sol einen vordefinierten Style hinterlegt

  gitDocuContainer.innerHTML = `<img  class = "gitDocuImage" src=${imagePath} alt="git_Documentation"/>`
  
}
window.onload = () =>{
  fetchGitWorkflowImage();

}