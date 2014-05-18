dm4c.add_plugin("net.abriraqui.import-export", function(){

    dm4c.add_listener("post_refresh_topicmap_menu", function(topicmap_menu) {

	if (dm4c.has_create_permission("dm4.topicmaps.topicmap")) {
	    topicmap_menu.add_separator()
	    topicmap_menu.add_item({
		label: "Export Topicmap",
		handler: export_topicmap
	    })
	    topicmap_menu.add_item({
		label: "Import Topicmap",
		handler: import_topicmap
	    })
	} 
	
	function export_topicmap(){
	    dm4c.restc.request("POST", "/import-export/export")
	    var topicmap = dm4c.get_plugin("de.deepamehta.topicmaps").get_topicmap()
	    alert("Export of topicmap " + topicmap.get_id() + " complete")
	}

	function import_topicmap(){
	    dm4c.get_plugin("de.deepamehta.files").open_upload_dialog("/import-export/import", function(response){
		dm4c.get_plugin("de.deepamehta.topicmaps").add_topicmap(response.topicmap_id)
	    })
	}

    })
})
