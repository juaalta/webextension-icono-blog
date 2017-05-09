/*
Called when the item has been created, or when creation failed due to an error.
We'll just log success/failure here.
*/
function onCreated(n) {
  if (browser.runtime.lastError) {
    console.log(`Error: ${browser.runtime.lastError}`);
  } else {
    console.log("Item created successfully");
  }
}

/*
Called when the item has been removed.
We'll just log success here.
*/
function onRemoved() {
  console.log("Item removed successfully");
}

/*
Called when there was an error.
We'll just log the error here.
*/
function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Create all the context menu items.
*/

browser.contextMenus.create({
  id: "blog_pagina_principal",
  title: browser.i18n.getMessage("contextMenuItemBlogPaginaPrincipal"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "separator-1",
  type: "separator",
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "blog_indice_etiqueta",
  title: browser.i18n.getMessage("contextMenuItemIndiceEtiqueta"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "blog_links_interesantes",
  title: browser.i18n.getMessage("contextMenuItemLinksInteresantes"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "blog_documentos_compartidos",
  title: browser.i18n.getMessage("contextMenuItemDocumentosCompartidos"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "blog_plugins_navegadores",
  title: browser.i18n.getMessage("contextMenuItemPluginsNavegadores"),
  contexts: ["all"]
}, onCreated);

browser.contextMenus.create({
  id: "blog_proyectos",
  title: browser.i18n.getMessage("contextMenuItemProyectos"),
  contexts: ["all"]
}, onCreated);


function onCreated(tab) {
  console.log(`Created new tab: ${tab.id}`)
}

function onError(error) {
  console.log(`Error: ${error}`);
}

openOnNewTab = function(linkUrl) {
  console.log(linkUrl);
  var creating = chrome.tabs.create({
    url: linkUrl,
    active: false
  });

  creating.then(onCreated, onError);

};

/*
The click event listener, where we perform the appropriate action given the
ID of the menu item that was clicked.
*/
browser.contextMenus.onClicked.addListener(function(info, tab) {
  switch (info.menuItemId) {
    case "blog_pagina_principal":
      openOnNewTab("http://blog.juansal.com/");
      break;
    case "blog_indice_etiqueta":
      openOnNewTab("http://blog.juansal.com/p/indice.html");
      break;
    case "blog_links_interesantes":
      openOnNewTab("http://blog.juansal.com/p/links-interesantes.html");
      break;
    case "blog_documentos_compartidos":
      openOnNewTab("http://blog.juansal.com/p/documentos-compartidos.html");
      break;
    case "blog_plugins_navegadores":
      openOnNewTab("http://blog.juansal.com/p/plugins-de-firefox.html");
      break;
    case "blog_proyectos":
      openOnNewTab("http://blog.juansal.com/p/proyectos.html");
      break;
  }
});
