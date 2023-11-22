
function toggleTab(tab) {
  // Remove the 'active' class from all tabs
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  // Add the 'active' class to the clicked tab
  tab.classList.add('active');

  // Get the corresponding div based on the tab's id
  const tabId = tab.id;
  const targetDiv = document.getElementById(tabId.replace('Tab', 'Div'));

  // Remove 'active' class from all divs
  const divs = document.querySelectorAll('.func-div');
  divs.forEach(div => div.classList.remove('active'));

  // Add 'active' class to the target div
  targetDiv.classList.add('active');
}
