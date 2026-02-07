const SUBJECTS = {
  html: {
    title: "HTML Topics",
    links: [
      { label: "Introduction", file: "turorials files/HTML/whatishtml.html" },
      { label: "HTML History & Evolution", file: "turorials files/HTML/whatishtml.html" },
      { label: "HTML Editor", file: "turorials files/HTML/htmltexteditors.html"},
      { label: "HTML Basic Tags", file: "turorials files/HTML/htmltags.html" },
      { label: "HTML Elements", file: "turorials files/HTML/htmlelements.html" },
      { label: "HTML Attributes", file: "turorials files/HTML/htmlattributes.html" },
      { label: "HTML Headings", file: "turorials files/HTML/htmlheadings.html" },
      { label: "HTML Paragraphs", file: "turorials files/HTML/htmlparagraphs.html" },
      { label: "HTML Fonts", file: "turorials files/HTML/htmlfonts.html" },
      { label: "HTML Blocks and Inline", file: "turorials files/HTML/htmlblock_inline.html" },
      { label: "HTML Style Sheet", file: "turorials files/HTML/htmlstylesheet.html" },
      { label: "HTML Formatting", file: "turorials files/HTML/htmlformatting.html" },
      { label: "HTML Quotations", file: "turorials files/HTML/htmlquotations.html" },
      { label: "HTML Comments", file: "turorials files/HTML/htmlcomments.html" },
      { label: "HTML Color", file: "turorials files/HTML/htmlcolor.html" },
      { label: "HTML Images", file: "turorials files/HTML/htmlimage.html" },
      { label: "HTML Image Maps", file: "turorials files/HTML/htmlimagemap.html" },
      { label: "HTML Frames", file: "turorials files/HTML/htmlframes.html"},
      { label: "HTML I-Frames", file: "turorials files/HTML/htmli_frames.html"},
      { label: "HTML Phrase Elements", file: "turorials files/HTML/htmlphraseelements.html"},
      { label: "HTML Code Element", file: "turorials files/HTML/htmlcodeelement.html" },
      { label: "HTML Meta Tags", file: "turorials files/HTML/htmlmetatags.html" },
      { label: "HTML Classes", file: "turorials files/HTML/htmlclasses.html" },
      { label: "HTML IDs", file: "turorials files/HTML/htmlids.html" },
      { label: "HTML Background", file: "turorials files/HTML/htmlbackground.html" },


      { label: "HTML Tables", isTitle: true},

      { label: "HTML-Tables", file: "turorials files/HTML/htmltables.html" },
      { label: "HTML-Table Headers & Captions", file: "turorials files/HTML/htmltable_headers_and_captions.html" },
      { label: "HTML-Table Styling",  file: "turorials files/HTML/htmltable_styling.html" },
      { label: "HTML-Table Colgroup", file: "turorials files/HTML/htmltable_colgroup.html"},
      { label: "HTML-Nested Tables", file: "turorials files/HTML/htmlnested_tables.html"}, 
      
      
      { label: "HTML-Lists", isTitle: true},

      { label: "HTML-Lists", file: "turorials files/HTML/htmllists.html"},
      { label: "HTML-Unordered Lists", file: "turorials files/HTML/html_unordered_lists.html"},
      { label: "HTML-Ordered Lists", file: "turorials files/HTML/html_ordered_lists.html"},
      { label: "HTML-Definition Lists", file: "turorials files/HTML/htmldefinition_table.html"},
      

      { label: "HTML-Links", isTitle: true},

      { label: "HTML-Text Links", file: "turorials files/HTML/htmltextlinks.html"},
      { label: "HTML-Image Links", file: "turorials files/HTML/htmlimagelinks.html"},
      { label: "HTML-Email Links", file: "turorials files/HTML/htmlemaillinks.html"},


      { label: "HTML-Color Name & Values", isTitle: true},

      { label: "HTML-Color Names", file: "turorials files/HTML/htmlcolorname.html"},
      { label: "HTML-RGB & RGBA Colors", file: "turorials files/HTML/htmlrgb_and_rgba.html"},
      { label: "HTML-HEX Color", file: "turorials files/HTML/htmlhexcolor.html" },
      { label: "HTML-HSL and HSLA Colors", file: "turorials files/HTML/htmlhls.html" },
      { label: "HSL Color Picker", file: "turorials files/HTML/hlscolorpicker.html" },


      { label: "HTML-Forms", isTitle: true},

      { label: "HTML-Forms", file: "turorials files/HTML/htmlforms.html"},
      { label: "HTML-Form Attributes", file: "turorials files/HTML/htmlformattributes.html"},
      { label: "HTML-Form Control", file: "turorials files/HTML/htmlformcontrol.html" },
      { label: "HTML-Input Attributes", file: "turorials files/HTML/htmlinputattributes.html" },


      { label: "HTML Media", isTitle: true},

      { label: "HTML - Video Element", file: "turorials files/HTML/htmlmedia/htmlvideoelement.html" },
      { label: "HTML - Audio Element", file: "turorials files/HTML/htmlmedia/htmlaudioelement.html" },
      { label: "HTML - Embed Multimedia", file: "turorials files/HTML/htmlmedia/htmlembedmultimedia.html" },
      

      { label: "HTML Header", isTitle: true},

      { label: "HTML - Head Element", file: "turorials files/HTML/htmlheader/htmlheadelement.html" },
      { label: "HTML - Adding Favicon", file: "turorials files/HTML/htmlheader/htmladdingfavicon.html" },
      { label: "HTML - Javascript", file: "turorials files/HTML/htmlheader/htmljavascript.html" },
      

      { label: "HTML Layouts", isTitle: true},

      { label: "HTML - Layouts", file: "turorials files/HTML/htmllayout/htmllayouts.html" },
      { label: "HTML - Layout Elements", file: "turorials files/HTML/htmllayout/htmllayoutelements.html" },
      { label: "HTML - Layout using CSS", file: "turorials files/HTML/htmllayout/htmllayoutusingcss.html" },
      { label: "HTML - Responsiveness", file: "turorials files/HTML/htmllayout/htmlresponsiveness.html" },
      { label: "HTML - Symbols", file: "turorials files/HTML/htmllayout/htmlsymbols.html" },
      { label: "HTML - Emojis", file: "turorials files/HTML/htmllayout/htmlemojies.html" },
      { label: "HTML - Style Guide", file: "turorials files/HTML/htmllayout/htmlstyleguide.html" },
      

      { label: "HTML Graphics", isTitle: true},

      { label: "HTML - SVG", file: "turorials files/HTML/htmlgraphics/htmlsvg.html" },
      { label: "HTML - Canvas", file: "turorials files/HTML/htmlgraphics/htmlcanvas.html" },
      

      { label: "HTML APIs", isTitle: true},

      { label: "HTML - Geolocation API", file: "turorials files/HTML/htmlapis/htmlgeolocation.html" },
      { label: "HTML - Drag & Drop API", file: "turorials files/HTML/htmlapis/htmldraganddropapis.html" },
      { label: "HTML - Web Workers API", file: "turorials files/HTML/htmlapis/htmlwebworkesapis.html" },
      { label: "HTML - WebSocket", file: "turorials files/HTML/htmlapis/htmlwebsocket.html" },
      { label: "HTML - Web Storage", file: "turorials files/HTML/htmlapis/htmlwebstorage.html" },
      { label: "HTML - Server Sent Events", file: "turorials files/HTML/htmlapis/htmlserversentevents.html" },
      

      { label: "HTML Miscellaneous", isTitle: true},

      { label: "HTML - Document Object Model (DOM)", file: "turorials files/HTML/htmlmiscellaneous/htmldocumentobjectmodel.html" },
      { label: "HTML - MathML", file: "turorials files/HTML/htmlmiscellaneous/htmlmathml.html" },
      { label: "HTML - Microdata", file: "turorials files/HTML/htmlmiscellaneous/htmlmicrodata.html" },
      { label: "HTML - IndexedDB", file: "turorials files/HTML/htmlmiscellaneous/htmlindexeddb.html" },
      { label: "HTML - Web Messaging", file: "turorials files/HTML/htmlmiscellaneous/htmlwebmessaging.html" },
      { label: "HTML - Web CORS", file: "turorials files/HTML/htmlmiscellaneous/htmlcors.html" },
      { label: "HTML - Web RTC", file: "turorials files/HTML/htmlmiscellaneous/htmlwebrtc.html" },
      

      { label: "HTML Demo", isTitle: true},

      { label: "HTML - Audio Player", file: "turorials files/HTML/htmldemo/htmlaudioplayer.html" },
      { label: "HTML - Video Player", file: "turorials files/HTML/htmldemo/htmlvideoplayer.html" },
      { label: "HTML - Web slide Desk", file: "turorials files/HTML/htmldemo/htmlwebslidedesk.html" },
      

      { label: "HTML Tools", isTitle: true},

      { label: "HTML - Velocity Draw", file: "turorials files/HTML/htmltool/htmlvelocitydraw.html" },
      { label: "HTML - QR Code", file: "turorials files/HTML/htmltool/htmlqrcode.html" },
      { label: "HTML - Modernizer", file: "turorials files/HTML/htmltool/htmlmodernizer.html" },
      { label: "HTML - Validation", file: "turorials files/HTML/htmltool/htmlvalidation.html" },
      { label: "HTML - Color Picker", file: "turorials files/HTML/htmltool/htmlcolorpicker.html" },
      

      { label: "HTML References", isTitle: true},

      { label: "HTML - Cheat Sheet", file: "turorials files/HTML/htmlreferences/htmlcheatsheet.html" },
      { label: "HTML - Tags Reference", file: "turorials files/HTML/htmlreferences/htmltagreferences.html" },
      { label: "HTML - Attributes Reference", file: "turorials files/HTML/htmlreferences/htmlattributereferences.html" },
      { label: "HTML - Events Reference", file: "turorials files/HTML/htmlreferences/htmleventsreferences.html" },
      { label: "HTML - Fonts Reference", file: "turorials files/HTML/htmlreferences/htmlfontreferences.html" },
      { label: "HTML - ASCII Codes", file: "turorials files/HTML/htmlreferences/htmlasciicodes.html" },
      { label: "ASCII Table Lookup", file: "turorials files/HTML/htmlreferences/htmlasciitablelookup.html" },
      { label: "HTML - Color Names", file: "turorials files/HTML/htmlreferences/htmlcolornames.html" },
      { label: "HTML - Character Entities", file: "turorials files/HTML/htmlreferences/htmlcharacterentities.html" },
      { label: "MIME Media Types", file: "turorials files/HTML/htmlreferences/htmlmimemediatype.html" },
      { label: "HTML - URL Encoding", file: "turorials files/HTML/htmlreferences/htmlurlencoding.html" },
      { label: "Language ISO Codes", file: "turorials files/HTML/htmlreferences/htmllanguageisocodes.html" },
      { label: "HTML - Character Encodings", file: "turorials files/HTML/htmlreferences/htmlcharacterencoding.html" },
      { label: "HTML - Deprecated Tags", file: "turorials files/HTML/htmlreferences/htmldeprecatedtags.html" },
      

      { label: "HTML Resources", isTitle: true},

      { label: "HTML - Quick Guide", file: "turorials files/HTML/htmlresources/htmlquickguide.html" },
      { label: "HTML - Useful Resources", file: "turorials files/HTML/htmlresources/htmlusefulresources.html" },
      { label: "HTML - Color Code Builder", file: "turorials files/HTML/htmlresources/htmlcolorcodebuilder.html" },
      { label: "HTML - Online Editor", file: "turorials files/HTML/htmlresources/htmlonelineeditor.html" },
      

    ],
  },
  css: {
    title: "CSS Topics",
    links: [
      { label: "CSS - Home", file: "turorials files/CSS/csshome.html" },
      { label: "CSS - Roadmap", file: "turorials files/CSS/cssroadmap.html" },
      { label: "CSS - Introduction", file: "turorials files/CSS/cssintroduction.html" },
      { label: "CSS - Syntax", file: "turorials files/CSS/csssyntax.html" },
      { label: "CSS - Inclusion", file: "turorials files/CSS/cssinclusion.html" },
      { label: "CSS - Types", file: "turorials files/CSS/csstype.html" },
      { label: "CSS - Measurement Units", file: "turorials files/CSS/cssunit.html" },
      { label: "CSS - Selectors", file: "turorials files/CSS/cssselector.html" },
      { label: "CSS - Colors", file: "turorials files/CSS/csscolor.html" },
      { label: "CSS - Backgrounds", file: "turorials files/CSS/cssbackground.html" },
      { label: "CSS - Fonts", file: "turorials files/CSS/cssfonts.html" },
      { label: "CSS - Text", file: "turorials files/CSS/csstext.html" },
      { label: "CSS - Images", file: "turorials files/CSS/cssimages.html" },
      { label: "CSS - Links", file: "turorials files/CSS/csslink.html" },
      { label: "CSS - Tables", file: "turorials files/CSS/csstable.html" },
      { label: "CSS - Border Block", file: "turorials files/CSS/cssborder.html" },
      { label: "CSS - Border Inline", file: "turorials files/CSS/cssborderinline.html" },
      { label: "CSS - Margins", file: "turorials files/CSS/cssmargin.html" },
      { label: "CSS - Lists", file: "turorials files/CSS/csslist.html" },
      { label: "CSS - Padding", file: "turorials files/CSS/csspadding.html" },
      { label: "CSS - Cursor", file: "turorials files/CSS/csscursor.html" },
      { label: "CSS - Outlines", file: "turorials files/CSS/cssoutline.html" },
      { label: "CSS - Dimension", file: "turorials files/CSS/cssdimension.html" },
      { label: "CSS - Scrollbars", file: "turorials files/CSS/cssscrollbars.html" },
      { label: "CSS - Inline Block", file: "turorials files/CSS/cssinlineblock.html" },
      { label: "CSS - Dropdowns", file: "turorials files/CSS/cssdropdown.html" },
      { label: "CSS - Visibility", file: "turorials files/CSS/cssvisibility.html" },
      { label: "CSS - Overflow", file: "turorials files/CSS/cssoverflow.html" },
      { label: "CSS - Clearfix", file: "CSS/cssclearfix.html" },
      { label: "CSS - Float", file: "turorials files/CSS/cssfloat.html" },
      { label: "CSS - Arrows", file: "turorials files/CSS/cssarrows.html" },
      { label: "CSS - Resize", file: "turorials files/CSS/cssresize.html" },
      { label: "CSS - Quotes", file: "turorials files/CSS/cssquotes.html" },
      { label: "CSS - Order", file: "turorials files/CSS/cssorder.html" },
      { label: "CSS - Position", file: "turorials files/CSS/cssposition.html" },
      { label: "CSS - Hyphens", file: "turorials files/CSS/csshyphens.html" },
      { label: "CSS - Hover", file: "turorials files/CSS/csshover.html" },
      { label: "CSS - Display", file: "turorials files/CSS/cssdisplay.html" },
      { label: "CSS - Focus", file: "turorials files/CSS/cssfocuseffect.html" },
      { label: "CSS - Zoom", file: "turorials files/CSS/csszoom.html" },
      { label: "CSS - Translate", file: "turorials files/CSS/csstranslate.html" },
      { label: "CSS - Height", file: "turorials files/CSS/cssheight.html" },
      { label: "CSS - Hyphenate Character", file: "turorials files/CSS/csshyphenate.html" },
      { label: "CSS - Width", file: "turorials files/CSS/csswidth.html" },
      { label: "CSS - Opacity", file: "turorials files/CSS/cssopacity.html" },
      { label: "CSS - Z-Index", file: "turorials files/CSS/csszindex.html" },
      { label: "CSS - Bottom", file: "turorials files/CSS/cssbottom.html" },
      { label: "CSS - Navbar", file: "turorials files/CSS/cssnavbar.html" },
      { label: "CSS - Overlay", file: "turorials files/CSS/cssoverlay.html" },
      { label: "CSS - Forms", file: "turorials files/CSS/cssforms.html" },
      { label: "CSS - Align", file: "turorials files/CSS/cssalign.html" },
      { label: "CSS - Icons", file: "turorials files/CSS/cssicons.html" },
      { label: "CSS - Image Gallery", file: "turorials files/CSS/cssimagegallery.html" },
      { label: "CSS - Comments", file: "turorials files/CSS/csscomment.html" },
      { label: "CSS - Loaders", file: "turorials files/CSS/cssloader.html" },
      { label: "CSS - Attribute Selectors", file: "turorials files/CSS/cssattributeselector.html" },
      { label: "CSS - Combinators", file: "turorials files/CSS/csscombinator.html" },
      { label: "CSS - Root", file: "turorials files/CSS/cssroot.html" },
      { label: "CSS - Box Model", file: "turorials files/CSS/cssboxmodel.html" },
      { label: "CSS - Counters", file: "turorials files/CSS/csscounter.html" },
      { label: "CSS - Clip", file: "turorials files/CSS/cssclip.html" },
      { label: "CSS - Writing Mode", file: "turorials files/CSS/csswriting.html" },
      { label: "CSS - Unicode-bidi", file: "turorials files/CSS/cssunicornbd.html" },
      { label: "CSS - min-content", file: "turorials files/CSS/cssmincontent.html" },
      { label: "CSS - All", file: "turorials files/CSS/cssallproperty.html" },
      { label: "CSS - Inset", file: "turorials files/CSS/cssinset.html" },
      { label: "CSS - Isolation", file: "turorials files/CSS/cssisolation.html" },
      { label: "CSS - Overscroll", file: "turorials files/CSS/cssoverscroll.html" },
      { label: "CSS - Justify Items", file: "turorials files/CSS/cssjustifyitems.html" },
      { label: "CSS - Justify Self", file: "turorials files/CSS/cssjustifyself.html" },
      { label: "CSS - Tab Size", file: "turorials files/CSS/csstabsize.html" },
      { label: "CSS - Pointer Events", file: "turorials files/CSS/csspointerevent.html" },
      { label: "CSS - Place Content", file: "turorials files/CSS/cssplacecontent.html" },
      { label: "CSS - Place Items", file: "turorials files/CSS/cssplaceitem.html" },
      { label: "CSS - Place Self", file: "turorials files/CSS/cssplaceself.html" },
      { label: "CSS - Max Block Size", file: "turorials files/CSS/cssmaxblocksize.html" },
      { label: "CSS - Min Block Size", file: "turorials files/CSS/cssminblocksize.html" },
      { label: "CSS - Mix Blend Mode", file: "turorials files/CSS/cssmixblendmode.html" },
      { label: "CSS - Max Inline Size", file: "turorials files/CSS/cssmaxinlinesize.html" },
      { label: "CSS - Min Inline Size", file: "turorials files/CSS/cssmininlinesize.html" },
      { label: "CSS - Offset", file: "turorials files/CSS/cssoffset.html" },
      { label: "CSS - Accent Color", file: "turorials files/CSS/cssaccentcolor.html" },
      { label: "CSS - User Select", file: "turorials files/CSS/cssuserselect.html" },
      { label: "CSS - Cascading", file: "turorials files/CSS/csscascading.html" },
      { label: "CSS - Universal Selectors", file: "turorials files/CSS/cssuniversalselector.html" },
      { label: "CSS - ID Selectors", file: "turorials files/CSS/cssidselector.html" },
      { label: "CSS - Group Selectors", file: "turorials files/CSS/cssgroupselector.html" },
      { label: "CSS - Class Selectors", file: "turorials files/CSS/cssclassselector.html" },
      { label: "CSS - Child Selectors", file: "turorials files/CSS/csschildselectors.html" },
      { label: "CSS - Element Selectors", file: "turorials files/CSS/csselementselectors.html" },
      { label: "CSS - Descendant Selectors", file: "turorials files/CSS/cssdescendantselector.html" },
      { label: "CSS - General Sibling Selectors", file: "turorials files/CSS/cssgeneralsiblingselectors.html" },
      { label: "CSS - Adjacent Sibling Selectors", file: "turorials files/CSS/cssadjacentsibling.html" },
      
      
      { label: "CSS Advanced", isTitle: true},

      { label: "CSS - Grid", file: "turorials files/CSS/cssadvance/cssgrid.html" },
      { label: "CSS - Grid Layout", file: "turorials files/CSS/cssadvance/cssgridlayout.html" },
      { label: "CSS - Flexbox", file: "turorials files/CSS/cssadvance/cssflexbox.html" },
      { label: "CSS - Visibility", file: "turorials files/CSS/cssadvance/cssvisibility.html" },
      { label: "CSS - Positioning", file: "turorials files/CSS/cssadvance/csspositioning.html" },
      { label: "CSS - Layers", file: "turorials files/CSS/cssadvance/csslayers.html" },
      { label: "CSS - Pseudo Classes", file: "turorials files/CSS/cssadvance/csspseudoclass.html" },
      { label: "CSS - Pseudo Elements", file: "turorials files/CSS/cssadvance/csspseudoelement.html" },
      { label: "CSS - @ Rules", file: "turorials files/CSS/cssadvance/cssrules.html" },
      { label: "CSS - Text Effects", file: "turorials files/CSS/cssadvance/csstexteffect.html" },
      { label: "CSS - Paged Media", file: "turorials files/CSS/cssadvance/csspagedmedia.html" },
      { label: "CSS - Printing", file: "turorials files/CSS/cssadvance/cssprinting.html" },
      { label: "CSS - Layouts", file: "turorials files/CSS/cssadvance/csslayout.html" },
      { label: "CSS - Validations", file: "turorials files/CSS/cssadvance/cssvalidation.html" },
      { label: "CSS - Image Sprites", file: "turorials files/CSS/cssadvance/cssimagesprites.html" },
      { label: "CSS - Important", file: "turorials files/CSS/cssadvance/cssimportantrule.html" },
      { label: "CSS - Data Types", file: "turorials files/CSS/cssadvance/cssdatatype.html" },

      
      { label: "CSS3 Advanced Features", isTitle: true},

      { label: "CSS - Rounded Corner", file: "turorials files/CSS/css3advance/cssroundedcorner.html" },
      { label: "CSS - Border Images", file: "turorials files/CSS/css3advance/cssborderimage.html" },
      { label: "CSS - Multi Background", file: "turorials files/CSS/css3advance/cssmultiplebackground.html" },
      { label: "CSS - Color", file: "turorials files/CSS/css3advance/csscolor.html" },
      { label: "CSS - Gradients", file: "turorials files/CSS/css3advance/cssgradient.html" },
      { label: "CSS - Box Shadow", file: "turorials files/CSS/css3advance/cssboxshadow.html" },
      { label: "CSS - Box Decoration Break", file: "turorials files/CSS/css3advance/cssboxdecorationbreak.html" },
      { label: "CSS - Caret Color", file: "turorials files/CSS/css3advance/csscaretcolor.html" },
      { label: "CSS - Text Shadow", file: "turorials files/CSS/css3advance/csstextshadow.html" },
      { label: "CSS - 2d transform", file: "turorials files/CSS/css3advance/css2dtransfrom.html" },
      { label: "CSS - 3d transform", file: "turorials files/CSS/css3advance/css3dtransfrom.html" },
      { label: "CSS - Transition", file: "turorials files/CSS/css3advance/csstransition.html" },
      { label: "CSS - Animation", file: "turorials files/CSS/css3advance/cssanimation.html" },
      { label: "CSS - Multi columns", file: "turorials files/CSS/css3advance/cssmultiplecolumns.html" },
      { label: "CSS - Box Sizing", file: "turorials files/CSS/css3advance/cssboxsizing.html" },
      { label: "CSS - Tooltips", file: "turorials files/CSS/css3advance/csstooltip.html" },
      { label: "CSS - Buttons", file: "turorials files/CSS/css3advance/cssbuttons.html" },
      { label: "CSS - Pagination", file: "turorials files/CSS/css3advance/csspagination.html" },
      { label: "CSS - Variables", file: "turorials files/CSS/css3advance/cssvariables.html" },
      { label: "CSS - Media Queries", file: "turorials files/CSS/css3advance/cssmediaqueries.html" },
      { label: "CSS - Functions", file: "turorials files/CSS/css3advance/cssfunction.html" },
      { label: "CSS - Math Functions", file: "turorials files/CSS/css3advance/cssmathfunction.html" },
      { label: "CSS - Masking", file: "turorials files/CSS/css3advance/cssmasking.html" },
      { label: "CSS - Shapes", file: "turorials files/CSS/css3advance/cssshapes.html" },
      { label: "CSS - Style Images", file: "turorials files/CSS/css3advance/cssstylingimages.html" },
      { label: "CSS - Specificity", file: "turorials files/CSS/css3advance/cssspecificity.html" },
      { label: "CSS - Custom Properties", file: "turorials files/CSS/css3advance/csscustomproperties.html" },


      { label: "              ", isTitle: true},
      { label: "CSS Responsive", isTitle: true},

      { label: "CSS RWD - Introduction", file: "turorials files/CSS/cssresponsives/cssrwdintroduction.html" },
      { label: "CSS RWD - Viewport", file: "turorials files/CSS/cssresponsives/cssviewport.html" },
      { label: "CSS RWD - Grid View", file: "turorials files/CSS/cssresponsives/cssgridview.html" },
      { label: "CSS RWD - Media Queries", file: "turorials files/CSS/cssresponsives/cssmediaqueries.html" },
      { label: "CSS RWD - Images", file: "turorials files/CSS/cssresponsives/cssimages.html" },
      { label: "CSS RWD - Videos", file: "turorials files/CSS/cssresponsives/cssvideos.html" },
      { label: "CSS RWD - Frameworks", file: "turorials files/CSS/cssresponsives/cssframework.html" },


      { label: "              ", isTitle: true},
      { label: "CSS References", isTitle: true},

      { label: "CSS Interview Questions", file: "turorials files/CSS/cssreferences/cssinterviewquestions.html" },
      { label: "CSS Online Quiz", file: "turorials files/CSS/cssreferences/cssonlinequiz.html" },
      { label: "CSS Online Test", file: "turorials files/CSS/cssreferences/cssonlinetest.html" },
      { label: "CSS Mock Test", file: "turorials files/CSS/cssreferences/cssmocktest.html" },
      { label: "CSS - Quick Guide", file: "turorials files/CSS/cssreferences/cssquickguide.html" },
      { label: "CSS - Cheatsheet", file: "turorials files/CSS/cssreferences/csscheatsheet.html" },
      { label: "CSS - Properties References", file: "turorials files/CSS/cssreferences/csspropertiesreferences.html" },
      { label: "CSS - Functions References", file: "turorials files/CSS/cssreferences/cssfunctionreferences.html" },
      { label: "CSS - Color References", file: "turorials files/CSS/cssreferences/csscolorreference.html" },
      { label: "CSS - Web Browser References", file: "turorials files/CSS/cssreferences/csswebbrowserreference.html" },
      { label: "CSS - Web Safe Fonts", file: "turorials files/CSS/cssreferences/csswebsafefonts.html" },
      { label: "CSS - Units", file: "turorials files/CSS/cssreferences/cssunits.html" },
      { label: "CSS - Animation", file: "turorials files/CSS/cssreferences/cssanimation.html" },


      { label: "           ", isTitle: true},
      { label: "CSS - Tools", isTitle: true},

      { label: "CSS - PX to EM converter", file: "turorials files/CSS/csstoools/csspxtoemconvertor.html" },
      { label: "CSS - Color Chooser & Animation", file: "turorials files/CSS/csstoools/csscolorchooserandanimation.html" },


      { label: "              ", isTitle: true},
      { label: "CSS - Resources", isTitle: true},

      { label: "CSS - Useful Resources", file: "turorials files/CSS/cssresources/cssusefulresources.html" },
      { label: "CSS - Discussion", file: "turorials files/CSS/cssresources/cssdiscussion.html" },



      { label: "Selected Reading", isTitle: true},

      { label: "UPSC IAS Exams Notes", file: "turorials files/CSS/cssselectedlearning/cssupsciasexamsnotes.html" },
      { label: "Developer's Best Practices", file: "turorials files/CSS/cssselectedlearning/cssdevelopersbestpractices.html" },
      { label: "Questions and Answers", file: "turorials files/CSS/cssselectedlearning/cssquestionsandanswers.html" },
      { label: "Effective Resume Writing", file: "turorials files/CSS/cssselectedlearning/csseffectiveresumewriting.html" },
      { label: "AI Based Resume Builder", file: "turorials files/CSS/cssselectedlearning/cssaibasedresumebuilder.html" },
      { label: "Personal AI Study Assistant", file: "turorials files/CSS/cssselectedlearning/csspersonalaistudyassistant.html" },
      { label: "Generate Coding Logic", file: "turorials files/CSS/cssselectedlearning/cssgeneratecodinglogic.html" },

    ],
  },
  javascript: {
    title: "JavaScript Topics",
    links: [
      { label: "JavaScript - Home", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jshome.html" },
      { label: "JavaScript - Overview", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsoverview.html" },
      { label: "JavaScript - Features", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsfeatures.html" },
      { label: "JavaScript - Enabling", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsenabling.html" },
      { label: "JavaScript - Placement", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsplacement.html" },
      { label: "JavaScript - Syntax", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jssyntax.html" },
      { label: "JavaScript - Hello World", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jshellowroldprogram.html" },
      { label: "JavaScript - Console.log()", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsconsolel.log().html" },
      { label: "JavaScript - Comments", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jscomments.html" },
      { label: "JavaScript - Variables", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsvariables.html" },
      { label: "JavaScript - let Statement", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsletstatment.html" },
      { label: "JavaScript - Constants", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsconstant.html" },
      { label: "JavaScript - Data Types", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsdatatype.html" },
      { label: "JavaScript - Type Conversions", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jstypeconversion.html" },
      { label: "JavaScript - Strict Mode", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsstrictmode.html" },
      { label: "JavaScript - Reserved Keywords", file: "turorials files/JAVASCRIPT/javascriptbasictutorial/jsreservedword.html" },


      { label: "                      ", isTitle: true},
      { label: "JavaScript - Operators", isTitle: true},

      { label: "JavaScript - Operators", file: "turorials files/JAVASCRIPT/jsoperators/jsoperators.html" },
      { label: "JavaScript - Arithmetic Operators", file: "turorials files/JAVASCRIPT/jsoperators/jsarithmetic.html" },
      { label: "JavaScript - Comparison Operators", file: "turorials files/JAVASCRIPT/jsoperators/jscomparsion.html" },
      { label: "JavaScript - Logical Operators", file: "turorials files/JAVASCRIPT/jsoperators/jslogicaloperator.html" },
      { label: "JavaScript - Bitwise Operators", file: "turorials files/JAVASCRIPT/jsoperators/jsbitwiseoperator.html" },
      { label: "JavaScript - Assignment Operators", file: "turorials files/JAVASCRIPT/jsoperators/jsassignment.html" },
      { label: "JavaScript - Conditional Operators", file: "turorials files/JAVASCRIPT/jsoperators/jsconditional.html" },
      { label: "JavaScript - typeof Operator", file: "turorials files/JAVASCRIPT/jsoperators/jstypeof.html" },
      { label: "JavaScript - Nullish Coalescing Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsnullishcoalescing.html" },
      { label: "JavaScript - Safe Assignment Operator", file: "turorials files/JAVASCRIPT/jsoperators/jssafeassignmentoperator.html" },
      { label: "JavaScript - Delete Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsdeleteoperator.html" },
      { label: "JavaScript - Comma Operator", file: "turorials files/JAVASCRIPT/jsoperators/jscommaoperator.html" },
      { label: "JavaScript - Grouping Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsgroupingoperator.html" },
      { label: "JavaScript - Yield Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsyieldoperator.html" },
      { label: "JavaScript - Spread Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsspreadoperator.html" },
      { label: "JavaScript - Exponentiation Operator", file: "turorials files/JAVASCRIPT/jsoperators/jsexponentiatio.html" },
      { label: "JavaScript - Operator Precedence", file: "turorials files/JAVASCRIPT/jsoperators/jsoperatorprecedence.html" },

      { label: "                       ", isTitle: true},
      { label: "JavaScript Control Flow", isTitle: true},

      { label: "JavaScript - If...Else", file: "turorials files/JAVASCRIPT/jscontrolflow/jsifelsestatemnt.html" },
      { label: "JavaScript - While Loop", file: "turorials files/JAVASCRIPT/jscontrolflow/jswhileloop.html" },
      { label: "JavaScript - For Loop", file: "turorials files/JAVASCRIPT/jscontrolflow/jsforloop.html" },
      { label: "JavaScript - For...in", file: "turorials files/JAVASCRIPT/jscontrolflow/jsforinloop.html" },
      { label: "JavaScript - For...of", file: "turorials files/JAVASCRIPT/jscontrolflow/jsforofloop.html" },
      { label: "JavaScript - Loop Control", file: "turorials files/JAVASCRIPT/jscontrolflow/jsloopcontrol.html" },
      { label: "JavaScript - Break Statement", file: "turorials files/JAVASCRIPT/jscontrolflow/jsbreakstatement.html" },
      { label: "JavaScript - Continue Statement", file: "turorials files/JAVASCRIPT/jscontrolflow/jscontinue.html" },
      { label: "JavaScript - Switch Case", file: "turorials files/JAVASCRIPT/jscontrolflow/jsswitchcase.html" },
      { label: "JavaScript - User Defined Iterators", file: "turorials files/JAVASCRIPT/jscontrolflow/jsuserdefineiterator.html" },


      { label: "                      ", isTitle: true},
      { label: "JavaScript - Functions", isTitle: true},

      { label: "JavaScript Functions", file: "turorials files/JAVASCRIPT/jsfunction/jsfunction.html" },
      { label: "JavaScript - Function Expressions", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionexpression.html" },
      { label: "JavaScript - Function Parameters", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionparameter.html" },
      { label: "JavaScript - Default Parameters", file: "turorials files/JAVASCRIPT/jsfunction/jsdefaultparameter.html" },
      { label: "JavaScript - Function() Constructor", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionconstructure.html" },
      { label: "JavaScript - Function Hoisting", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionhoisting.html" },
      { label: "JavaScript - Self-Invoking Functions", file: "turorials files/JAVASCRIPT/jsfunction/jsselfinvokingfunction.html" },
      { label: "JavaScript - Arrow Functions", file: "turorials files/JAVASCRIPT/jsfunction/jsarrowfunction.html" },
      { label: "JavaScript - Function Invocation", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionincovation.html" },
      { label: "JavaScript - Function call()", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctioncall.html" },
      { label: "JavaScript - Function apply()", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionapply.html" },
      { label: "JavaScript - Function bind()", file: "turorials files/JAVASCRIPT/jsfunction/jsfunctionbind.html" },
      { label: "JavaScript - Closures", file: "turorials files/JAVASCRIPT/jsfunction/jsclosure.html" },
      { label: "JavaScript - Variable Scope", file: "turorials files/JAVASCRIPT/jsfunction/jsvariablescope.html" },
      { label: "JavaScript - Global Variables", file: "turorials files/JAVASCRIPT/jsfunction/jsglobalvariable.html" },
      { label: "JavaScript - Smart Function Parameters", file: "turorials files/JAVASCRIPT/jsfunction/jssmartfunctionvariable.html" },

      { label: "                  ", isTitle: true},
      { label: "JavaScript Objects", isTitle: true},

      { label: "JavaScript - Number", file: "turorials files/JAVASCRIPT/jsobjects/jsnumberobject.html" },
      { label: "JavaScript - Boolean", file: "turorials files/JAVASCRIPT/jsobjects/jsboolean.html" },
      { label: "JavaScript - Strings", file: "turorials files/JAVASCRIPT/jsobjects/jsstring.html" },
      { label: "JavaScript - Arrays", file: "turorials files/JAVASCRIPT/jsobjects/jsarrays.html" },
      { label: "JavaScript - Date", file: "turorials files/JAVASCRIPT/jsobjects/jsdate.html" },
      { label: "JavaScript - DataView", file: "turorials files/JAVASCRIPT/jsobjects/jsdataview.html" },
      { label: "JavaScript - Handler", file: "turorials files/JAVASCRIPT/jsobjects/jshandeler.html" },
      { label: "JavaScript - Math", file: "turorials files/JAVASCRIPT/jsobjects/jsmath.html" },
      { label: "JavaScript - RegExp", file: "turorials files/JAVASCRIPT/jsobjects/jsregexp.html" },
      { label: "JavaScript - Symbol", file: "turorials files/JAVASCRIPT/jsobjects/jssymbol.html" },
      { label: "JavaScript - Sets", file: "turorials files/JAVASCRIPT/jsobjects/jssets.html" },
      { label: "JavaScript - WeakSet", file: "turorials files/JAVASCRIPT/jsobjects/jsweakset.html" },
      { label: "JavaScript - Maps", file: "turorials files/JAVASCRIPT/jsobjects/jsmaps.html" },
      { label: "JavaScript - WeakMap", file: "turorials files/JAVASCRIPT/jsobjects/jsweakmap.html" },
      { label: "JavaScript - Iterables", file: "turorials files/JAVASCRIPT/jsobjects/jsiterables.html" },
      { label: "JavaScript - Reflect", file: "turorials files/JAVASCRIPT/jsobjects/jsreflect.html" },
      { label: "JavaScript - TypedArray", file: "turorials files/JAVASCRIPT/jsobjects/jstypedarray.html" },
      { label: "JavaScript - Template Literals", file: "turorials files/JAVASCRIPT/jsobjects/jstamplateliterals.html" },
      { label: "JavaScript - Tagged Templates", file: "turorials files/JAVASCRIPT/jsobjects/jstaggedtamplates.html" },


      { label: "                          ", isTitle: true},
      { label: "Object Oriented JavaScript", isTitle: true},

      { label: "JavaScript - Objects", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobject.html" },
      { label: "JavaScript - Classes", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsclasses.html" },
      { label: "JavaScript - Object Properties", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobjectproperties.html" },
      { label: "JavaScript - Object Methods", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobjectmethods.html" },
      { label: "JavaScript - Static Methods", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsstaticmethod.html" },
      { label: "JavaScript - Display Objects", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsdisplayobjects.html" },
      { label: "JavaScript - Object Accessors", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobjectaccessors.html" },
      { label: "JavaScript - Object Constructors", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobjectconstructors.html" },
      { label: "JavaScript - Native Prototypes", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsnativeprototype.html" },
      { label: "JavaScript - ES5 Object Methods", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jses5objectmethods.html" },
      { label: "JavaScript - Encapsulation", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsencsapulation.html" },
      { label: "JavaScript - Inheritance", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsinheritance.html" },
      { label: "JavaScript - Abstraction", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsabstration.html" },
      { label: "JavaScript - Polymorphism", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jspolymorphism.html" },
      { label: "JavaScript - Destructuring", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsdestructing.html" },
      { label: "JavaScript - Destructuring Assignment", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsdestructingassignment.html" },
      { label: "JavaScript - Object Destructuring", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsobjectdestructing.html" },
      { label: "JavaScript - Array Destructuring", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsarraydestructing.html" },
      { label: "JavaScript - Nested Destructuring", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsnesteddestructing.html" },
      { label: "JavaScript - Optional Chaining", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsoptionalchaining.html" },
      { label: "JavaScript - Global Object", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsglobalobject.html" },
      { label: "JavaScript - Mixins", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsmixins.html" },
      { label: "JavaScript - Proxies", file: "turorials files/JAVASCRIPT/objectorientedjavascript/jsproxies.html" },

      
      { label: "                   ", isTitle: true},
      { label: "JavaScript Versions", isTitle: true},

      { label: "JavaScript - History", file: "turorials files/JAVASCRIPT/jsversion/jshistory.html" },
      { label: "JavaScript - Versions", file: "turorials files/JAVASCRIPT/jsversion/jsversions.html" },
      { label: "JavaScript - ES5", file: "turorials files/JAVASCRIPT/jsversion/jses5.html" },
      { label: "JavaScript - ES6", file: "turorials files/JAVASCRIPT/jsversion/jses6.html" },
      { label: "ECMAScript 2016", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2016.html" },
      { label: "ECMAScript 2017", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2017.html" },
      { label: "ECMAScript 2018", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2018.html" },
      { label: "ECMAScript 2019", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2019.html" },
      { label: "ECMAScript 2020", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2020.html" },
      { label: "ECMAScript 2021", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2021.html" },
      { label: "ECMAScript 2022", file: "turorials files/JAVASCRIPT/jsversion/jsecmascript2022.html" },

      
      { label: "                       ", isTitle: true},
      { label: "JavaScript Asynchronous", isTitle: true},

      { label: "JavaScript - Asynchronous", file: "turorials files/JAVASCRIPT/jsasynchronous/jsasynchronous.html" },
      { label: "JavaScript - Callback Functions", file: "turorials files/JAVASCRIPT/jsasynchronous/jscallbackfunction.html" },
      { label: "JavaScript - Promises", file: "turorials files/JAVASCRIPT/jsasynchronous/jspromises.html" },
      { label: "JavaScript - Async/Await", file: "turorials files/JAVASCRIPT/jsasynchronous/jsasyncawait.html" },
      { label: "JavaScript - Microtasks", file: "turorials files/JAVASCRIPT/jsasynchronous/jsmicrotasks.html" },
      { label: "JavaScript - Promisification", file: "turorials files/JAVASCRIPT/jsasynchronous/jsprominification.html" },
      { label: "JavaScript - Promises Chaining", file: "turorials files/JAVASCRIPT/jsasynchronous/jspromiseschaining.html" },
      { label: "JavaScript - Timing Events", file: "turorials files/JAVASCRIPT/jsasynchronous/jstimingevent.html" },
      { label: "JavaScript - setTimeout()", file: "turorials files/JAVASCRIPT/jsasynchronous/jssettimeout.html" },
      { label: "JavaScript - setInterval()", file: "turorials files/JAVASCRIPT/jsasynchronous/jssetintervala.html" },
      
      
      { label: "                  ", isTitle: true},
      { label: "JavaScript Cookies", isTitle: true},

      { label: "JavaScript - Cookies", file: "turorials files/JAVASCRIPT/jscookies/jscookies.html" },
      { label: "JavaScript - Cookie Attributes", file: "turorials files/JAVASCRIPT/jscookies/jscookieattributes.html" },
      { label: "JavaScript - Deleting Cookies", file: "turorials files/JAVASCRIPT/jscookies/jsdeletingcookies.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript Browser BOM", isTitle: true},

      { label: "JavaScript - Browser Object Model", file: "turorials files/JAVASCRIPT/jsbrowserbom/jsbrowserobjectmode.html" },
      { label: "JavaScript - Window Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jswindowobject.html" },
      { label: "JavaScript - Document Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jsdocumentobject.html" },
      { label: "JavaScript - Screen Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jsscreenobject.html" },
      { label: "JavaScript - History Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jshistoryobject.html" },
      { label: "JavaScript - Navigator Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jsnavigatorobject.html" },
      { label: "JavaScript - Location Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jslocationobject.html" },
      { label: "JavaScript - Console Object", file: "turorials files/JAVASCRIPT/jsbrowserbom/jsconsoleobject.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript Web APIs", isTitle: true},

      { label: "JavaScript - Web API", file: "turorials files/JAVASCRIPT/jswebapis/jswebapi.html" },
      { label: "JavaScript - History API", file: "turorials files/JAVASCRIPT/jswebapis/jshistoryapi.html" },
      { label: "JavaScript - Storage API", file: "turorials files/JAVASCRIPT/jswebapis/jsstorageapi.html" },
      { label: "JavaScript - Forms API", file: "turorials files/JAVASCRIPT/jswebapis/jsformsapi.html" },
      { label: "JavaScript - Worker API", file: "turorials files/JAVASCRIPT/jswebapis/jsworkerapi.html" },
      { label: "JavaScript - Fetch API", file: "turorials files/JAVASCRIPT/jswebapis/jsfetchapi.html" },
      { label: "JavaScript - Geolocation API", file: "turorials files/JAVASCRIPT/jswebapis/jsgeolocationapi.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript Events", isTitle: true},

      { label: "JavaScript - Events", file: "turorials files/JAVASCRIPT/jsevents/jsevents.html" },
      { label: "JavaScript - DOM Events", file: "turorials files/JAVASCRIPT/jsevents/jsdomevent.html" },
      { label: "JavaScript - addEventListener()", file: "turorials files/JAVASCRIPT/jsevents/jsaddeventlistener.html" },
      { label: "JavaScript - Mouse Events", file: "turorials files/JAVASCRIPT/jsevents/jsmouseevent.html" },
      { label: "JavaScript - Keyboard Events", file: "turorials files/JAVASCRIPT/jsevents/jskeyboardevent.html" },
      { label: "JavaScript - Form Events", file: "turorials files/JAVASCRIPT/jsevents/jsformevent.html" },
      { label: "JavaScript - Window/Document Events", file: "turorials files/JAVASCRIPT/jsevents/jswindowanddocumentobject.html" },
      { label: "JavaScript - Event Delegation", file: "turorials files/JAVASCRIPT/jsevents/jseventdelegation.html" },
      { label: "JavaScript - Event Bubbling", file: "turorials files/JAVASCRIPT/jsevents/jseventbubbling.html" },
      { label: "JavaScript - Event Capturing", file: "turorials files/JAVASCRIPT/jsevents/jseventcapturing.html" },
      { label: "JavaScript - Custom Events", file: "turorials files/JAVASCRIPT/jsevents/jscustomevent.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript Error Handling", isTitle: true},

      { label: "JavaScript - Error Handling", file: "turorials files/JAVASCRIPT/jserrorhandling/jserroehandling.html" },
      { label: "JavaScript - try...catch", file: "turorials files/JAVASCRIPT/jserrorhandling/jstrycatch.html" },
      { label: "JavaScript - Debugging", file: "turorials files/JAVASCRIPT/jserrorhandling/jsdebugging.html" },
      { label: "JavaScript - Custom Errors", file: "turorials files/JAVASCRIPT/jserrorhandling/jscustomerror.html" },
      { label: "JavaScript - Extending Errors", file: "turorials files/JAVASCRIPT/jserrorhandling/jsextendingerrors.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript Important Keywords", isTitle: true},

      { label: "JavaScript - this Keyword", file: "turorials files/JAVASCRIPT/jsimportantkeyword/jsthiskeyword.html" },
      { label: "JavaScript - void Keyword", file: "turorials files/JAVASCRIPT/jsimportantkeyword/jsvoidkeyword.html" },
      { label: "JavaScript - new Keyword", file: "turorials files/JAVASCRIPT/jsimportantkeyword/jsnewkeyword.html" },
      { label: "JavaScript - var Keyword", file: "turorials files/JAVASCRIPT/jsimportantkeyword/jsvarkeyword.html" },
      

      { label: "                  ", isTitle: true},
      { label: "JavaScript HTML DOM", isTitle: true},

      { label: "JavaScript - HTML DOM", file: "turorials files/JAVASCRIPT/jshtmldom/jshtmldom.html" },
      { label: "JavaScript - DOM Methods & Properties", file: "turorials files/JAVASCRIPT/jshtmldom/jsdommethodandproperties.html" },
      { label: "JavaScript - DOM Document", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomdocument.html" },
      { label: "JavaScript - DOM Elements", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomelement.html" },
      { label: "JavaScript - DOM Attributes (Attr)", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomattributes.html" },
      { label: "JavaScript - DOM Forms", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomforms.html" },
      { label: "JavaScript - Changing HTML", file: "turorials files/JAVASCRIPT/jshtmldom/jschanginghtml.html" },
      { label: "JavaScript - Changing CSS", file: "turorials files/JAVASCRIPT/jshtmldom/jschangingcss.html" },
      { label: "JavaScript - DOM Animation", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomanimation.html" },
      { label: "JavaScript - DOM Navigation", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomnavigation.html" },
      { label: "JavaScript - DOM Collections", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomcollection.html" },
      { label: "JavaScript - DOM NodeList", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomnodelist.html" },
      { label: "JavaScript - DOM DOMTokenList", file: "turorials files/JAVASCRIPT/jshtmldom/jsdomtokenlist.html" },


      { label: "                  ", isTitle: true},
      { label: "JavaScript Advanced Chapters", isTitle: true},

      { label: "JavaScript - Bubble Sort Algorithm", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsbubblesortalogorithm.html" },
      { label: "JavaScript - Circular Reference Error", file: "turorials files/JAVASCRIPT/jsadvancechapters/jscircularreferenceerror.html" },
      { label: "JavaScript - Code Testing with Jest", file: "turorials files/JAVASCRIPT/jsadvancechapters/jscodetestingwithjest.html" },
      { label: "JavaScript - CORS Handling", file: "turorials files/JAVASCRIPT/jsadvancechapters/jscorshandling.html" },
      { label: "JavaScript - Data Analysis", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdatanalysis.html" },
      { label: "JavaScript - Dead Zone", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdeadzone.html" },
      { label: "JavaScript - Design Patterns", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdesignpatterns.html" },
      { label: "JavaScript - Engine and Runtime", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsengineandruntime.html" },
      { label: "JavaScript - Execution Context", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsexecutioncontext.html" },
      { label: "JavaScript - Function Composition", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsfunctioncomposition.html" },
      { label: "JavaScript - Immutability", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsimmutablility.html" },
      { label: "JavaScript - Kaboom.js", file: "turorials files/JAVASCRIPT/jsadvancechapters/jskaboom.html" },
      { label: "JavaScript - Lexical Scope", file: "turorials files/JAVASCRIPT/jsadvancechapters/jslexicalscope.html" },
      { label: "JavaScript - Local Storage", file: "turorials files/JAVASCRIPT/jsadvancechapters/jslocalstorage.html" },
      { label: "JavaScript - Memoization", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsmemozation.html" },
      { label: "JavaScript - Minifying JS", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsminifying.html" },
      { label: "JavaScript - Mutability vs Immutability", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsmutabilityandimmutability.html" },
      { label: "JavaScript - Package Manager", file: "turorials files/JAVASCRIPT/jsadvancechapters/jspackagemanager.html" },
      { label: "JavaScript - Parse S-Expressions", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsparsesexpression.html" },
      { label: "JavaScript - Prototypal Inheritance", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsprototypalinheritance.html" },
      { label: "JavaScript - Reactivity", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsreactivity.html" },
      { label: "JavaScript - Require Function", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsrequirefunction.html" },
      { label: "JavaScript - Selection API", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsselectionapis.html" },
      { label: "JavaScript - Session Storage", file: "turorials files/JAVASCRIPT/jsadvancechapters/jssessionstorage.html" },
      { label: "JavaScript - SQL CRUD Operations", file: "turorials files/JAVASCRIPT/jsadvancechapters/jssqlcurdoperation.html" },
      { label: "JavaScript - Supercharged Sorts", file: "turorials files/JAVASCRIPT/jsadvancechapters/jssuperchargedsorts.html" },
      { label: "JavaScript - Temporal Dead Zone", file: "turorials files/JAVASCRIPT/jsadvancechapters/jstemporaldeadzone.html" },
      { label: "JavaScript - Throttling", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsthrottling.html" },
      { label: "JavaScript - TRPC Library", file: "turorials files/JAVASCRIPT/jsadvancechapters/jstrpclibary.html" },
      { label: "JavaScript - Truthy and Falsy Values", file: "turorials files/JAVASCRIPT/jsadvancechapters/jstruthyfalsyvalues.html" },
      { label: "JavaScript - Upload Files", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsuploadfiles.html" },
      { label: "JavaScript - Date Comparison", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdatecomparsion.html" },
      { label: "JavaScript - Recursion", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsrecursion.html" },
      { label: "JavaScript - Data Structures", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdatastructure.html" },
      { label: "JavaScript - Base64 Encoding", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsbase64encoding.html" },
      { label: "JavaScript - Callback Function", file: "turorials files/JAVASCRIPT/jsadvancechapters/jscallbackfunction.html" },
      { label: "JavaScript - Current Date/Time", file: "turorials files/JAVASCRIPT/jsadvancechapters/jscurrentdatetime.html" },
      { label: "JavaScript - Date Validation", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsdatevalidation.html" },
      { label: "JavaScript - Filter Method", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsfiltermethod.html" },
      { label: "JavaScript - Generating Colors", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsgeneratingcolors.html" },
      { label: "JavaScript - HTTP Requests", file: "turorials files/JAVASCRIPT/jsadvancechapters/jshttprequest.html" },
      { label: "JavaScript - Insertion Sort", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsinsertionsortalgorithm.html" },
      { label: "JavaScript - Lazy Loading", file: "turorials files/JAVASCRIPT/jsadvancechapters/jslazyloading.html" },
      { label: "JavaScript - Linked List", file: "turorials files/JAVASCRIPT/jsadvancechapters/jslinkedlist.html" },
      { label: "JavaScript - Nested Loop", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsnestedloop.html" },
      { label: "JavaScript - Null Checking", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsnullchecking.html" },
      { label: "JavaScript - Get Current URL", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsgetcurrenturl.html" },
      { label: "JavaScript - Graph Algorithms", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsgraphalgorithm.html" },
      { label: "JavaScript - Higher Order Functions", file: "turorials files/JAVASCRIPT/jsadvancechapters/jshigherorderfunction.html" },
      { label: "JavaScript - Empty String Check", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsemptystringcheck.html" },
      { label: "JavaScript - Form Handling", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsformhandling.html" },
      { label: "JavaScript - Functional Programming", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsfunctionprogramming.html" },
      { label: "JavaScript - Parameters vs Arguments", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsparametersvsarguments.html" },
      { label: "JavaScript - Prototype", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsprototype.html" },
      { label: "JavaScript - Reactive Programming", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsreactiveprogramming.html" },
      { label: "JavaScript - Reduce Method", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsreducemethod.html" },
      { label: "JavaScript - Rest Operator", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsrestoperator.html" },
      { label: "JavaScript - Short Circuiting", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsshortcircuiting.html" },
      { label: "JavaScript - Undefined Check", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsundefinedcheck.html" },
      { label: "JavaScript - Unit Testing", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsunittesting.html" },
      { label: "JavaScript - Validate URL", file: "turorials files/JAVASCRIPT/jsadvancechapters/jsvalidateurls.html" },
      

      { label: "                        ", isTitle: true},
      { label: "JavaScript Miscellaneous", isTitle: true},

      { label: "JavaScript - Ajax", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsajax.html" },
      { label: "JavaScript - Async Iteration", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsasynciteration.html" },
      { label: "JavaScript - Atomics Objects", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsatomicobject.html" },
      { label: "JavaScript - Rest Parameter", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsrestparameter.html" },
      { label: "JavaScript - Page Redirect", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jspageredirect.html" },
      { label: "JavaScript - Dialog Boxes", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsdialogboxes.html" },
      { label: "JavaScript - Page Printing", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jspageprinting.html" },
      { label: "JavaScript - Validations", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsvalidation.html" },
      { label: "JavaScript - Animation", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsanimation.html" },
      { label: "JavaScript - Multimedia", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsmultimedia.html" },
      { label: "JavaScript - Image Map", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsimagemap.html" },
      { label: "JavaScript - Browsers", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsbrowser.html" },
      { label: "JavaScript - JSON", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsjson.html" },
      { label: "JavaScript - Multiline Strings", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsmultilinestring.html" },
      { label: "JavaScript - Date Formats", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsdateformates.html" },
      { label: "JavaScript - Get Date Methods", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsgetdatamethods.html" },
      { label: "JavaScript - Set Date Methods", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jssetdatamethods.html" },
      { label: "JavaScript - Modules", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsmodules.html" },
      { label: "JavaScript - Dynamic Imports", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsdynamicimports.html" },
      { label: "JavaScript - BigInt", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsbigint.html" },
      { label: "JavaScript - Blob", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsblob.html" },
      { label: "JavaScript - Unicode", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsunicode.html" },
      { label: "JavaScript - Shallow Copy", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsshallowcopy.html" },
      { label: "JavaScript - Call Stack", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jscallstack.html" },
      { label: "JavaScript - Reference Type", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsreferencetype.html" },
      { label: "JavaScript - IndexedDB", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsindexeddb.html" },
      { label: "JavaScript - Clickjacking Attack", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsclickjackingattack.html" },
      { label: "JavaScript - Currying", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jscurrying.html" },
      { label: "JavaScript - Graphics", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsgraphics.html" },
      { label: "JavaScript - Canvas", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jscanvas.html" },
      { label: "JavaScript - Debouncing", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsdebouncing.html" },
      { label: "JavaScript - Performance", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsperformance.html" },
      { label: "JavaScript - Style Guide", file: "turorials files/JAVASCRIPT/jsmiscellaneous/jsstyleguide.html" },
      

      { label: "                        ", isTitle: true},
      { label: "JavaScript Useful Resources", isTitle: true},

      { label: "JavaScript - Questions And Answers", file: "turorials files/JAVASCRIPT/jsusefulreference/jsquestionandanswer.html" },
      { label: "JavaScript - Quick Guide", file: "turorials files/JAVASCRIPT/jsusefulreference/jsquickguide.html" },
      { label: "JavaScript - Cheatsheet", file: "turorials files/JAVASCRIPT/jsusefulreference/jscheatsheet.html" },
      { label: "JavaScript - Functions", file: "turorials files/JAVASCRIPT/jsusefulreference/jsfunction.html" },
      { label: "JavaScript - Resources", file: "turorials files/JAVASCRIPT/jsusefulreference/jsresources.html" },
      { label: "JavaScript - Online Editor", file: "turorials files/JAVASCRIPT/jsusefulreference/jsonelineeditor.html" },
      

    ],
  },
  react: {
    title: "React Topics",
    links: [
      { label: "ReactJS - Introduction", file: "turorials files/REACT/introduction/reactjsintroduction.html" },
      { label: "ReactJS - Roadmap", file: "turorials files/REACT/introduction/reactjsroadmap.html" },
      { label: "ReactJS - Installation", file: "turorials files/REACT/introduction/reactjsinstallation.html" },
      { label: "ReactJS - Features", file: "turorials files/REACT/introduction/reactjsfeatures.html" },
      { label: "ReactJS - Advantages & Disadvantages", file: "turorials files/REACT/introduction/reactjsadvantagesanddisadvantages.html" },
      { label: "ReactJS - Architecture", file: "turorials files/REACT/introduction/reactjsarchitecture.html" },
      { label: "ReactJS - Creating a React Application", file: "turorials files/REACT/introduction/reactjscreatingareactapplication.html" },
      { label: "ReactJS - JSX", file: "turorials files/REACT/introduction/reactjsjsx.html" },
      { label: "ReactJS - Components", file: "turorials files/REACT/introduction/reactjscomponent.html" },
      { label: "ReactJS - Nested Components", file: "turorials files/REACT/introduction/reactjsnestedcomponents.html" },
      { label: "ReactJS - Using Newly Created Components", file: "turorials files/REACT/introduction/reactjsusingnewlycreatedcomponent.html" },
      { label: "ReactJS - Component Collection", file: "turorials files/REACT/introduction/reactjscomponentcollection.html" },
      { label: "ReactJS - Styling", file: "turorials files/REACT/introduction/reactjsstyling.html" },
      { label: "ReactJS - Properties (props)", file: "turorials files/REACT/introduction/reactjsproperties.html" },
      { label: "ReactJS - Creating Components using Properties", file: "turorials files/REACT/introduction/reactjscreatingcomponentusingproperties.html" },
      { label: "ReactJS - props Validation", file: "turorials files/REACT/introduction/propsvalidation.html" },
      { label: "ReactJS - Constructor", file: "turorials files/REACT/introduction/constructor.html" },
      { label: "ReactJS - Component Life Cycle", file: "turorials files/REACT/introduction/componentlifecycle.html" },
      { label: "ReactJS - Event management", file: "turorials files/REACT/introduction/eventmanagement.html" },
      { label: "ReactJS - Creating an Event−Aware Component", file: "turorials files/REACT/introduction/createeventawarecomponent.html" },
      { label: "ReactJS - Introduce Events in Expense Manager APP", file: "turorials files/REACT/introduction/introductiontoeventinexpensemanagerapp.html" },
      { label: "ReactJS - State Management", file: "turorials files/REACT/introduction/statemanagement.html" },
      { label: "ReactJS - State Management API", file: "turorials files/REACT/introduction/statemanagementapi.html" },
      { label: "ReactJS - Stateless Component", file: "turorials files/REACT/introduction/statelesscomponents.html" },
      { label: "ReactJS - State Management Using React Hooks", file: "turorials files/REACT/introduction/statemanagmentusingreacthooks.html" },
      { label: "ReactJS - Component Life Cycle Using React Hooks", file: "turorials files/REACT/introduction/componentlifecycleusingreacthooks.html" },
      { label: "ReactJS - Layout Component", file: "turorials files/REACT/introduction/layoutcomponent.html" },
      { label: "ReactJS - Pagination", file: "turorials files/REACT/introduction/pagination.html" },
      { label: "ReactJS - Material UI", file: "turorials files/REACT/introduction/materialui.html" },
      { label: "ReactJS - Http client programming", file: "turorials files/REACT/introduction/httpclientprogramming.html" },
      { label: "ReactJS - Form Programming", file: "turorials files/REACT/introduction/formprogramming.html" },
      { label: "ReactJS - Controlled Component", file: "turorials files/REACT/introduction/controlledcomponent.html" },
      { label: "ReactJS - Uncontrolled Component", file: "turorials files/REACT/introduction/uncontrolledcomponent.html" },
      { label: "ReactJS - Formik", file: "turorials files/REACT/introduction/formik.html" },
      { label: "ReactJS - Conditional Rendering", file: "turorials files/REACT/introduction/conditionalrandering.html" },
      { label: "ReactJS - Lists", file: "turorials files/REACT/introduction/lists.html" },
      { label: "ReactJS - Keys", file: "turorials files/REACT/introduction/keys.html" },

      { label: "ReactJS - Keys xyz", isTitle: true},

      { label: "ReactJS - Routing", file: "turorials files/REACT/introduction/routing.html" },
      { label: "ReactJS - Redux", file: "turorials files/REACT/introduction/redux.html" },
      { label: "ReactJS - Animation", file: "turorials files/REACT/introduction/animation.html" },
      { label: "ReactJS - Bootstrap", file: "turorials files/REACT/introduction/bootstrap.html" },
      { label: "ReactJS - Map", file: "turorials files/REACT/introduction/map.html" },
      { label: "ReactJS - Table", file: "turorials files/REACT/introduction/table.html" },
      { label: "ReactJS - Managing State Using Flux", file: "turorials files/REACT/introduction/managingstateusingflux.html" },
      { label: "ReactJS - Testing", file: "turorials files/REACT/introduction/testing.html" },
      { label: "ReactJS - CLI Commands", file: "turorials files/REACT/introduction/clicommand.html" },
      { label: "ReactJS - Building and Deployment", file: "turorials files/REACT/introduction/buildinganddeployment.html" },
      { label: "ReactJS - Example", file: "turorials files/REACT/introduction/example.html" },


      { label: "Hooks", file: "turorials files/REACT/hooks.html" },
      { label: "ReactJS - Introduction to Hooks", file: "turorials files/REACT/hooks/introductiontohooks.html" },
      { label: "ReactJS - Using useState", file: "turorials files/REACT/hooks/usingusestate.html" },
      { label: "ReactJS - Using useEffect", file: "turorials files/REACT/hooks/usinguseffect.html" },
      { label: "ReactJS - Using useContext", file: "turorials files/REACT/hooks/usingusecontext.html" },
      { label: "ReactJS - Using useRef", file: "turorials files/REACT/hooks/usinguseref.html" },
      { label: "ReactJS - Using useReducer", file: "turorials files/REACT/hooks/usingusereducer.html" },
      { label: "ReactJS - Using useCallback", file: "turorials files/REACT/hooks/usingusecallback.html" },
      { label: "ReactJS - Using useMemo", file: "turorials files/REACT/hooks/usingusememo.html" },
      { label: "ReactJS - Custom Hooks", file: "turorials files/REACT/hooks/customhooks.html" },


      { label: "ReactJS Advanced", isTitle: true},

      { label: "ReactJS - Accessibility", file: "turorials files/REACT/advanced/accessibility.html" },
      { label: "ReactJS - Code Splitting", file: "turorials files/REACT/advanced/codesplitting.html" },
      { label: "ReactJS - Context", file: "turorials files/REACT/advanced/context.html" },
      { label: "ReactJS - Error Boundaries", file: "turorials files/REACT/advanced/erroeboundaries.html" },
      { label: "ReactJS - Forwarding Refs", file: "turorials files/REACT/advanced/forwardingrefs.html" },
      { label: "ReactJS - Fragments", file: "turorials files/REACT/advanced/fragments.html" },
      { label: "ReactJS - Higher Order Components", file: "turorials files/REACT/advanced/higherordercomponents.html" },
      { label: "ReactJS - Integrating With Other Libraries", file: "turorials files/REACT/advanced/integratingwithotherlibaries.html" },
      { label: "ReactJS - Optimizing Performance", file: "turorials files/REACT/advanced/optimizingperformance.html" },
      { label: "ReactJS - Profiler API", file: "turorials files/REACT/advanced/profilerapis.html" },
      { label: "ReactJS - Portals", file: "turorials files/REACT/advanced/protals.html" },
      { label: "ReactJS - React Without ES6 ECMAScript", file: "turorials files/REACT/advanced/reactwithoutes6ecmascript.html" },
      { label: "ReactJS - React Without JSX", file: "turorials files/REACT/advanced/reactwithoutjsx.html" },
      { label: "ReactJS - Reconciliation", file: "turorials files/REACT/advanced/reconciliation.html" },
      { label: "ReactJS - Refs and the DOM", file: "turorials files/REACT/advanced/refsandthedom.html" },
      { label: "ReactJS - Render Props", file: "turorials files/REACT/advanced/reactrenderprops.html" },
      { label: "ReactJS - Static Type Checking", file: "turorials files/REACT/advanced/statictypechecking.html" },
      { label: "ReactJS - Strict Mode", file: "turorials files/REACT/advanced/strictmode.html" },
      { label: "ReactJS - Web Components", file: "turorials files/REACT/advanced/webcomponents.html" },


      { label: "Additional Concepts", isTitle: true},

      { label: "ReactJS - Date Picker", file: "turorials files/REACT/additional concept/datepicker.html" },
      { label: "ReactJS - Helmet", file: "turorials files/REACT/additional concept/helmet.html" },
      { label: "ReactJS - Inline Style", file: "turorials files/REACT/additional concept/inlinestyle.html" },
      { label: "ReactJS - PropTypes", file: "turorials files/REACT/additional concept/proptype.html" },
      { label: "ReactJS - BrowserRouter", file: "turorials files/REACT/additional concept/browserrouters.html" },
      { label: "ReactJS - DOM", file: "turorials files/REACT/additional concept/dom.html" },
      { label: "ReactJS - Carousel", file: "turorials files/REACT/additional concept/carousel.html" },
      { label: "ReactJS - Icons", file: "turorials files/REACT/additional concept/icons.html" },
      { label: "ReactJS - Form Components", file: "turorials files/REACT/additional concept/formcomponents.html" },
      { label: "ReactJS - Reference API", file: "turorials files/REACT/additional concept/referenceapi.html" },


      { label: "ReactJS Useful Resources", isTitle: true},
      
      { label: "ReactJS - Quick Guide", file: "turorials files/REACT/usefulresources/quickguide.html" },
      { label: "ReactJS Cheatsheet", file: "turorials files/REACT/usefulresources/cheatsheet.html" },
      { label: "Axios CheatSheet", file: "turorials files/REACT/usefulresources/axioscheatsheet.html" },
      { label: "ReactJS - Useful Resources", file: "turorials files/REACT/usefulresources/usefulresources.html" },
      { label: "ReactJS - Discussion", file: "turorials files/REACT/usefulresources/discussion.html" },
      


    ],
  },

  nodejs: {
    title: "Node js",
    links: [
      { label: "Node.js - Home", file: "turorials files/NODEJS/introduction/home.html" },
      { label: "Node.js - Introduction", file: "turorials files/NODEJS/introduction/introductions.html" },
      { label: "Node.js - Environment Setup", file: "turorials files/NODEJS/introduction/environmentsetup.html" },
      { label: "Node.js - First Application", file: "turorials files/NODEJS/introduction/firstapplication.html" },
      { label: "Node.js - REPL Terminal", file: "turorials files/NODEJS/introduction/replterminal.html" },
      { label: "Node.js - Command Line Options", file: "turorials files/NODEJS/introduction/commandlineoptions.html" },
      { label: "Node.js - Package Manager (NPM)", file: "turorials files/NODEJS/introduction/packagemanager.html" },
      { label: "Node.js - Callbacks Concept", file: "turorials files/NODEJS/introduction/callbackconcepts.html" },
      { label: "Node.js - Upload Files", file: "turorials files/NODEJS/introduction/uploadfiles.html" },
      { label: "Node.js - Send an Email", file: "turorials files/NODEJS/introduction/sendanemail.html" },
      { label: "Node.js - Events", file: "turorials files/NODEJS/introduction/events.html" },
      { label: "Node.js - Event Loop", file: "turorials files/NODEJS/introduction/eventloop.html" },
      { label: "Node.js - Event Emitter", file: "turorials files/NODEJS/introduction/eventemitter.html" },
      { label: "Node.js - Debugger", file: "turorials files/NODEJS/introduction/debugger.html" },
      { label: "Node.js - Global Objects", file: "turorials files/NODEJS/introduction/globalobjects.html" },
      { label: "Node.js - Console", file: "turorials files/NODEJS/introduction/console.html" },
      { label: "Node.js - Process", file: "turorials files/NODEJS/introduction/process.html" },
      { label: "Node.js - Scaling Application", file: "turorials files/NODEJS/introduction/scalingapplications.html" },
      { label: "Node.js - Packaging", file: "turorials files/NODEJS/introduction/packaging.html" },
      { label: "Node.js - Express Framework", file: "turorials files/NODEJS/introduction/expressframework.html" },
      { label: "Node.js - RESTFul API", file: "turorials files/NODEJS/introduction/restfulapis.html" },
      { label: "Node.js - Buffers", file: "turorials files/NODEJS/introduction/buffers.html" },
      { label: "Node.js - Streams", file: "turorials files/NODEJS/introduction/streams.html" },
      { label: "Node.js - File System", file: "turorials files/NODEJS/introduction/filesystems.html" },


      { label: "Node.js MySQL", isTitle: true},

      { label: "Node.js - MySQL Get Started", file: "turorials files/NODEJS/mysql/mysqlgetstarted.html" },
      { label: "Node.js - MySQL Create Database", file: "turorials files/NODEJS/mysql/mysqlcreatedatabase.html" },
      { label: "Node.js - MySQL Create Table", file: "turorials files/NODEJS/mysql/mysqlcreatetable.html" },
      { label: "Node.js - MySQL Insert Into", file: "turorials files/NODEJS/mysql/mysqlinsertinto.html" },
      { label: "Node.js - MySQL Select From", file: "turorials files/NODEJS/mysql/mysqlselectfrom.html" },
      { label: "Node.js - MySQL Where", file: "turorials files/NODEJS/mysql/mysqlwhere.html" },
      { label: "Node.js - MySQL Order By", file: "turorials files/NODEJS/mysql/mysqlorderby.html" },
      { label: "Node.js - MySQL Delete", file: "turorials files/NODEJS/mysql/mysqldelete.html" },
      { label: "Node.js - MySQL Update", file: "turorials files/NODEJS/mysql/mysqlupdate.html" },
      { label: "Node.js - MySQL Join", file: "turorials files/NODEJS/mysql/mysqljoin.html" },



      { label: "Node.js MongoDB", isTitle: true},

      { label: "Node.js - MongoDB Get Started", file: "turorials files/NODEJS/mongodb/mongodbgetstarted.html" },
      { label: "Node.js - MongoDB Create Database", file: "turorials files/NODEJS/mongodb/mongodbcreatedatabase.html" },
      { label: "Node.js - MongoDB Create Collection", file: "turorials files/NODEJS/mongodb/mongodbcreatecollection.html" },
      { label: "Node.js - MongoDB Insert", file: "turorials files/NODEJS/mongodb/mongodbinsert.html" },
      { label: "Node.js - MongoDB Find", file: "turorials files/NODEJS/mongodb/mongodbfind.html" },
      { label: "Node.js - MongoDB Query", file: "turorials files/NODEJS/mongodb/mongodbquery.html" },
      { label: "Node.js - MongoDB Sort", file: "turorials files/NODEJS/mongodb/mongodbsort.html" },
      { label: "Node.js - MongoDB Delete", file: "turorials files/NODEJS/mongodb/mongodbdelete.html" },
      { label: "Node.js - MongoDB Update", file: "turorials files/NODEJS/mongodb/mongodbupdate.html" },
      { label: "Node.js - MongoDB Limit", file: "turorials files/NODEJS/mongodb/mongodblimit.html" },
      { label: "Node.js - MongoDB Join", file: "turorials files/NODEJS/mongodb/mongodbjoin.html" },


      { label: "Node.js Modules", isTitle: true},
      { label: "Node.js - Modules", file: "turorials files/NODEJS/modules/modules.html" },
      { label: "Node.js - Built-in Modules", file: "turorials files/NODEJS/modules/builtinmodules.html" },
      { label: "Node.js - Utility Modules", file: "turorials files/NODEJS/modules/utilitymodules.html" },
      { label: "Node.js - Web Module", file: "turorials files/NODEJS/modules/webmodules.html" },
      { label: "Node.js - Quick Guide", file: "turorials files/NODEJS/modules/quickguide.html" },
      { label: "Node.js - Cheatsheet", file: "turorials files/NODEJS/modules/cheatsheet.html" },
      { label: "Node.js - Useful Resources", file: "turorials files/NODEJS/modules/usefulresources.html" },
      { label: "Node.js - Discussion", file: "turorials files/NODEJS/modules/discuss.html" } 
      
    ],
  },

  nextjs: {
    title: "Next js",
    links: [
      { label: "Next.js - Home", file: "turorials files/NEXTJS/introduction/home.html" },
      { label: "Next.js - Overview", file: "turorials files/NEXTJS/introduction/overview.html" },
      { label: "Next.js - Project Setup", file: "turorials files/NEXTJS/introduction/projectsetup.html" },
      { label: "Next.js - Folder Structure", file: "turorials files/NEXTJS/introduction/folderstructure.html" },
      { label: "Next.js - App Router", file: "turorials files/NEXTJS/introduction/approuter.html" },
      { label: "Next.js - Page Router", file: "turorials files/NEXTJS/introduction/pagerouter.html" },


      { label: "Next.js Features", isTitle: true},

      { label: "Next.js - Pages", file: "turorials files/NEXTJS/features/pages.html" },
      { label: "Next.js - Data Fetching", file: "turorials files/NEXTJS/features/datafetching.html" },
      { label: "Next.js - ISR", file: "turorials files/NEXTJS/features/isr.html" },
      { label: "Next.js - Static File Serving", file: "turorials files/NEXTJS/features/staticfileserving.html" },
      { label: "Next.js - Pre-Rendering", file: "turorials files/NEXTJS/features/prerendering.html" },
      { label: "Next.js - Partial Pre Rendering", file: "turorials files/NEXTJS/features/partialprerendering.html" },
      { label: "Next.js - Server Side Rendering", file: "turorials files/NEXTJS/features/serversiderendering.html" },
      { label: "Next.js - Client Side Rendering", file: "turorials files/NEXTJS/features/clientsiderendering.html" },
      
      // Routing
      { label: "Next.js Routing", isTitle: true },

      { label: "Next.js - Routing", file: "turorials files/NEXTJS/routing/routing.html" },
      { label: "Next.js - Nested Routing", file: "turorials files/NEXTJS/routing/nestedrouting.html" },
      { label: "Next.js - Dynamic Routing", file: "turorials files/NEXTJS/routing/dynamicrouting.html" },
      { label: "Next.js - Parallel Routing", file: "turorials files/NEXTJS/routing/parallelrouting.html" },
      { label: "Next.js - Imperative Routing", file: "turorials files/NEXTJS/routing/imperativerouting.html" },
      { label: "Next.js - Shallow Routing", file: "turorials files/NEXTJS/routing/shallowrouting.html" },
      { label: "Next.js - Intercepting Routes", file: "turorials files/NEXTJS/routing/interceptingrouter.html" },
      { label: "Next.js - Redirecting Routes", file: "turorials files/NEXTJS/routing/redirectingrouter.html" },
      { label: "Next.js - Navigation and Linking", file: "turorials files/NEXTJS/routing/navigationandlinking.html" },
      
      // Configuration
      { label: "Next.js Configuration", isTitle: true },
      { label: "Next.js - TypeScript", file: "turorials files/NEXTJS/configuration/typescript.html" },
      { label: "Next.js - Environment Variables", file: "turorials files/NEXTJS/configuration/environmentvariables.html" },
      { label: "Next.js - File Conventions", file: "turorials files/NEXTJS/configuration/fileconventions.html" },
      { label: "Next.js - ESLint", file: "turorials files/NEXTJS/configuration/eslint.html" },
      
      // API & Backend
      { label: "Next.js API & Backend", isTitle: true },
      { label: "Next.js - API Routes", file: "turorials files/NEXTJS/apiandbackends/apiroutes.html" },
      { label: "Next.js - Dynamic API Routes", file: "turorials files/NEXTJS/apiandbackends/dynamicapiroutes.html" },
      { label: "Next.js - Route Handlers", file: "turorials files/NEXTJS/apiandbackends/routehandlers.html" },
      { label: "Next.js - API MiddleWares", file: "turorials files/NEXTJS/apiandbackends/apimiddlewares.html" },
      { label: "Next.js - Response Helpers", file: "turorials files/NEXTJS/apiandbackends/responsehelpers.html" },
      
      // API Reference
      { label: "Next.js API Reference", isTitle: true },
      { label: "Next.js - CLI Commands", file: "turorials files/NEXTJS/apireferences/clicommands.html" },
      { label: "Next.js - Functions", file: "turorials files/NEXTJS/apireferences/functions.html" },
      { label: "Next.js - Directives", file: "turorials files/NEXTJS/apireferences/directives.html" },
      { label: "Next.js - Components", file: "turorials files/NEXTJS/apireferences/components.html" },
      { label: "Next.js - Image Component", file: "turorials files/NEXTJS/apireferences/imagecomponent.html" },
      { label: "Next.js - Font Component", file: "turorials files/NEXTJS/apireferences/fontcomponent.html" },
      { label: "Next.js - Head Component", file: "turorials files/NEXTJS/apireferences/headcomponent.html" },
      { label: "Next.js - Form Component", file: "turorials files/NEXTJS/apireferences/formcomponent.html" },
      { label: "Next.js - Link Component", file: "turorials files/NEXTJS/apireferences/linkcomponent.html" },
      { label: "Next.js - Script Component", file: "turorials files/NEXTJS/apireferences/scriptcomponent.html" },
      
      // Styling & SEO
      { label: "Next.js Styling & SEO", isTitle: true },
      { label: "Next.js - CSS Support", file: "turorials files/NEXTJS/stylingseo/csssupport.html" },
      { label: "Next.js - Global CSS Support", file: "turorials files/NEXTJS/stylingseo/globalcss.html" },
      { label: "Next.js - Meta Data", file: "turorials files/NEXTJS/stylingseo/metadata.html" },
      
      // Advanced Topics
      { label: "Next.js Advanced Topics", isTitle: true },
      { label: "Next.js - Error Handling", file: "turorials files/NEXTJS/advancedtopic/errorhandling.html" },
      { label: "Next.js - Server Actions", file: "turorials files/NEXTJS/advancedtopic/serveractions.html" },
      { label: "Next.js - Fast Refresh", file: "turorials files/NEXTJS/advancedtopic/fastrefresh.html" },
      { label: "Next.js - Internationalization", file: "turorials files/NEXTJS/advancedtopic/internationalization.html" },
      { label: "Next.js - Authentication", file: "turorials files/NEXTJS/advancedtopic/authentication.html" },
      { label: "Next.js - Session Management", file: "turorials files/NEXTJS/advancedtopic/sessionmanagement.html" },
      { label: "Next.js - Authorization", file: "turorials files/NEXTJS/advancedtopic/authorization.html" },
      { label: "Next.js - Caching", file: "turorials files/NEXTJS/advancedtopic/caching.html" },
      { label: "Next.js - Data Caching", file: "turorials files/NEXTJS/advancedtopic/datacaching.html" },
      { label: "Next.js - Router Caching", file: "turorials files/NEXTJS/advancedtopic/routercaching.html" },
      { label: "Next.js - Full Route Caching", file: "turorials files/NEXTJS/advancedtopic/fullroutecaching.html" },
      { label: "Next.js - Request Memoization", file: "turorials files/NEXTJS/advancedtopic/requestmemoization.html" },
      
      // Performance Optimization
      { label: "Next.js Performance Optimization", isTitle: true },
      { label: "Next.js - Optimizations", file: "turorials files/NEXTJS/performanceoptimization/optimizations.html" },
      { label: "Next.js - Image Optimization", file: "turorials files/NEXTJS/performanceoptimization/imageoptimization.html" },
      { label: "Next.js - Lazy Loading", file: "turorials files/NEXTJS/performanceoptimization/lazyloading.html" },
      { label: "Next.js - Font Optimization", file: "turorials files/NEXTJS/performanceoptimization/fontoptimization.html" },
      { label: "Next.js - Video Optimization", file: "turorials files/NEXTJS/performanceoptimization/videooptimization.html" },
      { label: "Next.js - Script Optimization", file: "turorials files/NEXTJS/performanceoptimization/scriptoptimization.html" },
      { label: "Next.js - Memory Optimization", file: "turorials files/NEXTJS/performanceoptimization/memoryoptimization.html" },
      { label: "Next.js - Using OpenTelemetry", file: "turorials files/NEXTJS/performanceoptimization/usingopentelemetry.html" },
      { label: "Next.js - Package Bundling Optimization", file: "turorials files/NEXTJS/performanceoptimization/packagebundlingoptimization.html" },
      
      // Testing
      { label: "Next.js Testing", file: "turorials files/NEXTJS/testing/testing.html" },
      { label: "Next.js - Testing with Jest", file: "turorials files/NEXTJS/testing/testingwithjest.html" },
      { label: "Next.js - Testing with Cypress", file: "turorials files/NEXTJS/testing/testingwithcypress.html" },
      { label: "Next.js - Testing with Vitest", file: "turorials files/NEXTJS/testing/testingwithvitest.html" },
      { label: "Next.js - Testing with Playwright", file: "turorials files/NEXTJS/testing/testingwithplaywright.html" },
      
      // Debugging & Deployment
      { label: "Next.js - Debugging", file: "turorials files/NEXTJS/debugginanddeplayment/debugging.html" },
      { label: "Next.js - Deployment", file: "turorials files/NEXTJS/debugginanddeplayment/deployment.html" },
      
      // Useful Resources
      { label: "Next.js - Interview Questions", file: "NEXTJS/usefulresources/interviewquestions.html" },
      { label: "Next.js - Quick Guide", file: "NEXTJS/usefulresources/quickguide.html" },
      { label: "Next.js - Useful Resources", file: "NEXTJS/usefulresources/usefulresources.html" },
      { label: "Next.js - Discussion", file: "NEXTJS/usefulresources/discuss.html" }
      
    ]
  },

  python: {
    title: "Python",
    links: [
      { label: "Python - Home", file: "turorials files/PYTHON/introduction/home.html" },
      { label: "Python - Overview", file: "turorials files/PYTHON/introduction/overview.html" },
      { label: "Python - History", file: "turorials files/PYTHON/introduction/history.html" },
      { label: "Python - Features", file: "turorials files/PYTHON/introduction/features.html" },
      { label: "Python vs C++", file: "turorials files/PYTHON/introduction/pythonvsc++.html" },
      { label: "Python - Hello World Program", file: "turorials files/PYTHON/introduction/hellowroldprogram.html" },
      { label: "Python - Application Areas", file: "turorials files/PYTHON/introduction/applicationareas.html" },
      { label: "Python - Interpreter", file: "turorials files/PYTHON/introduction/interpreter.html" },
      { label: "Python - Environment Setup", file: "turorials files/PYTHON/introduction/enviromentsetup.html" },
      { label: "Python - Virtual Environment", file: "turorials files/PYTHON/introduction/virtualenvitoment.html" },
      { label: "Python - Basic Syntax", file: "turorials files/PYTHON/introduction/basicsyntax.html" },
      { label: "Python - Variables", file: "turorials files/PYTHON/introduction/variables.html" },
      { label: "Python - Private Variables", file: "turorials files/PYTHON/introduction/privatevariables.html" },
      { label: "Python - Data Types", file: "turorials files/PYTHON/introduction/datatype.html" },
      { label: "Python - Type Casting", file: "turorials files/PYTHON/introduction/typecasting.html" },
      { label: "Python - Unicode System", file: "turorials files/PYTHON/introduction/unicodesystem.html" },
      { label: "Python - Literals", file: "turorials files/PYTHON/introduction/literals.html" },
      { label: "Python - Operators", file: "turorials files/PYTHON/introduction/operators.html" },
      { label: "Python - Arithmetic Operators", file: "turorials files/PYTHON/introduction/arithmeticoperators.html" },
      { label: "Python - Comparison Operators", file: "turorials files/PYTHON/introduction/comparison.html" },
      { label: "Python - Assignment Operators", file: "turorials files/PYTHON/introduction/assignmentoperators.html" },
      { label: "Python - Logical Operators", file: "turorials files/PYTHON/introduction/logicaloperators.html" },
      { label: "Python - Bitwise Operators", file: "turorials files/PYTHON/introduction/bitewiseoperators.html" },
      { label: "Python - Membership Operators", file: "turorials files/PYTHON/introduction/membershipoperators.html" },
      { label: "Python - Identity Operators", file: "turorials files/PYTHON/introduction/identityoperators.html" },
      { label: "Python - Operator Precedence", file: "turorials files/PYTHON/introduction/operatorprecedence.html" },
      { label: "Python - Comments", file: "turorials files/PYTHON/introduction/commnents.html" },
      { label: "Python - User Input", file: "turorials files/PYTHON/introduction/userinput.html" },
      { label: "Python - Numbers", file: "turorials files/PYTHON/introduction/numbers.html" },
      { label: "Python - Booleans", file: "turorials files/PYTHON/introduction/booleans.html" },
      { label: "Python - Control Flow", file: "turorials files/PYTHON/introduction/controlflow.html" },
      { label: "Python - Decision Making", file: "turorials files/PYTHON/introduction/decisionmaking.html" },
      { label: "Python - If Statement", file: "turorials files/PYTHON/introduction/ifstatement.html" },
      { label: "Python - If else", file: "turorials files/PYTHON/introduction/ifelse.html" },
      { label: "Python - Nested If", file: "turorials files/PYTHON/introduction/nestedif.html" },
      { label: "Python - Match-Case Statement", file: "turorials files/PYTHON/introduction/mathcasestatement.html" },
      { label: "Python - Loops", file: "turorials files/PYTHON/introduction/loops.html" },
      { label: "Python - for Loops", file: "turorials files/PYTHON/introduction/forloops.html" },
      { label: "Python - for-else Loops", file: "turorials files/PYTHON/introduction/forelseloop.html" },
      { label: "Python - While Loops", file: "turorials files/PYTHON/introduction/whileloop.html" },
      { label: "Python - break Statement", file: "turorials files/PYTHON/introduction/breakstatements.html" },
      { label: "Python - continue Statement", file: "turorials files/PYTHON/introduction/continuestatement.html" },
      { label: "Python - pass Statement", file: "turorials files/PYTHON/introduction/passstatements.html" },
      { label: "Python - Nested Loops", file: "turorials files/PYTHON/introduction/nestedloop.html" },


      { label: "Python Functions & Modules", isTitle: true},
      { label: "Python - Functions", file: "turorials files/PYTHON/functions/function.html" },
      { label: "Python - Default Arguments", file: "turorials files/PYTHON/functions/defaultargument.html" },
      { label: "Python - Keyword Arguments", file: "turorials files/PYTHON/functions/keywordargument.html" },
      { label: "Python - Keyword-Only Arguments", file: "turorials files/PYTHON/functions/keywordonlyargument.html" },
      { label: "Python - Positional Arguments", file: "turorials files/PYTHON/functions/positionalarguments.html" },
      { label: "Python - Positional-Only Arguments", file: "turorials files/PYTHON/functions/positionalonlyargument.html" },
      { label: "Python - Arbitrary Arguments", file: "turorials files/PYTHON/functions/arbitaryarguments.html" },
      { label: "Python - Variables Scope", file: "turorials files/PYTHON/functions/variablescope.html" },
      { label: "Python - Function Annotations", file: "turorials files/PYTHON/functions/functionannotations.html" },
      { label: "Python - Modules", file: "turorials files/PYTHON/functions/modules.html" },
      { label: "Python - Built in Functions", file: "turorials files/PYTHON/functions/bulitinfunction.html" },


      { label: "Python Strings", isTitle: true},
      { label: "Python - Strings", file: "turorials files/PYTHON/strings/strings.html" },
      { label: "Python - Slicing Strings", file: "turorials files/PYTHON/strings/slicingstrings.html" },
      { label: "Python - Modify Strings", file: "turorials files/PYTHON/strings/modifystrings.html" },
      { label: "Python - String Concatenation", file: "turorials files/PYTHON/strings/stringconcatenation.html" },
      { label: "Python - String Formatting", file: "turorials files/PYTHON/strings/stringformatting.html" },
      { label: "Python - Escape Characters", file: "turorials files/PYTHON/strings/escapecharacter.html" },
      { label: "Python - String Methods", file: "turorials files/PYTHON/strings/stringmethods.html" },
      { label: "Python - String Exercises", file: "turorials files/PYTHON/strings/stringexercises.html" },


      { label: "Python Lists", file: "turorials files/PYTHON/lists/lists-overview.html" },
      { label: "Python - Lists", file: "turorials files/PYTHON/lists/lists.html" },
      { label: "Python - Access List Items", file: "turorials files/PYTHON/lists/accesslistitems.html" },
      { label: "Python - Change List Items", file: "turorials files/PYTHON/lists/changelistitems.html" },
      { label: "Python - Add List Items", file: "turorials files/PYTHON/lists/addlistitems.html" },
      { label: "Python - Remove List Items", file: "turorials files/PYTHON/lists/removelistitems.html" },
      { label: "Python - Loop Lists", file: "turorials files/PYTHON/lists/looplists.html" },
      { label: "Python - List Comprehension", file: "turorials files/PYTHON/lists/listcomprehension.html" },
      { label: "Python - Sort Lists", file: "turorials files/PYTHON/lists/sortlist.html" },
      { label: "Python - Copy Lists", file: "turorials files/PYTHON/lists/copylist.html" },
      { label: "Python - Join Lists", file: "turorials files/PYTHON/lists/joinlist.html" },
      { label: "Python - List Methods", file: "turorials files/PYTHON/lists/listmethod.html" },
      { label: "Python - List Exercises", file: "turorials files/PYTHON/lists/listexercise.html" },


      { label: "Python Tuples", isTitle: true},
      { label: "Python - Tuples", file: "turorials files/PYTHON/tuples/tuples.html" },
      { label: "Python - Access Tuple Items", file: "turorials files/PYTHON/tuples/accesstuplesitems.html" },
      { label: "Python - Update Tuples", file: "turorials files/PYTHON/tuples/updatetuples.html" },
      { label: "Python - Unpack Tuples", file: "turorials files/PYTHON/tuples/unpacktupleitems.html" },
      { label: "Python - Loop Tuples", file: "turorials files/PYTHON/tuples/looptuples.html" },
      { label: "Python - Join Tuples", file: "turorials files/PYTHON/tuples/jointuples.html" },
      { label: "Python - Tuple Methods", file: "turorials files/PYTHON/tuples/tuplemethods.html" },
      { label: "Python - Namedtuple", file: "turorials files/PYTHON/tuples/namedtuples.html" },
      { label: "Python - Tuple Exercises", file: "turorials files/PYTHON/tuples/tupleexercises.html" },


      { label: "Python Sets", isTitle: true},

      { label: "Python - Sets", file: "turorials files/PYTHON/sets/sets.html" },
      { label: "Python - Access Set Items", file: "turorials files/PYTHON/sets/accesssetitems.html" },
      { label: "Python - Add Set Items", file: "turorials files/PYTHON/sets/addsetitems.html" },
      { label: "Python - Remove Set Items", file: "turorials files/PYTHON/sets/removesetitems.html" },
      { label: "Python - Loop Sets", file: "turorials files/PYTHON/sets/loopsets.html" },
      { label: "Python - Join Sets", file: "turorials files/PYTHON/sets/joinsets.html" },
      { label: "Python - Copy Sets", file: "turorials files/PYTHON/sets/copysets.html" },
      { label: "Python - Set Operators", file: "turorials files/PYTHON/sets/setoperators.html" },
      { label: "Python - Set Methods", file: "turorials files/PYTHON/sets/setmethods.html" },
      { label: "Python - Set Exercises", file: "turorials files/PYTHON/sets/setexercises.html" },


      { label: "Python Dictionaries", isTitle: true},

      { label: "Python - Dictionaries", file: "turorials files/PYTHON/dictionaries/dictionaries.html" },
      { label: "Python - Access Dictionary Items", file: "turorials files/PYTHON/dictionaries/accessdictionaryitems.html" },
      { label: "Python - Change Dictionary Items", file: "turorials files/PYTHON/dictionaries/changedictionaryitems.html" },
      { label: "Python - Add Dictionary Items", file: "turorials files/PYTHON/dictionaries/adddictionaryitems.html" },
      { label: "Python - Remove Dictionary Items", file: "turorials files/PYTHON/dictionaries/removedictionaryitems.html" },
      { label: "Python - Dictionary View Objects", file: "turorials files/PYTHON/dictionaries/dictionaryviewobject.html" },
      { label: "Python - Loop Dictionaries", file: "turorials files/PYTHON/dictionaries/loopdictionaries.html" },
      { label: "Python - Copy Dictionaries", file: "turorials files/PYTHON/dictionaries/copydictionaries.html" },
      { label: "Python - Nested Dictionaries", file: "turorials files/PYTHON/dictionaries/nesteddictionaries.html" },
      { label: "Python - Dictionary Methods", file: "turorials files/PYTHON/dictionaries/dictionariesmethods.html" },
      { label: "Python - Dictionary Exercises", file: "turorials files/PYTHON/dictionaries/dictionariesexercises.html" },


      { label: "Python Arrays", isTitle: true},

      { label: "Python - Arrays", file: "turorials files/PYTHON/array/arrays.html" },
      { label: "Python - Access Array Items", file: "turorials files/PYTHON/array/accessarrayitem.html" },
      { label: "Python - Add Array Items", file: "turorials files/PYTHON/array/addarrayitems.html" },
      { label: "Python - Remove Array Items", file: "turorials files/PYTHON/array/removearrayitems.html" },
      { label: "Python - Loop Arrays", file: "turorials files/PYTHON/array/looparrayitems.html" },
      { label: "Python - Copy Arrays", file: "turorials files/PYTHON/array/copyarrayitems.html" },
      { label: "Python - Reverse Arrays", file: "turorials files/PYTHON/array/reversearray.html" },
      { label: "Python - Sort Arrays", file: "turorials files/PYTHON/array/sortarray.html" },
      { label: "Python - Join Arrays", file: "turorials files/PYTHON/array/joinarray.html" },
      { label: "Python - Array Methods", file: "turorials files/PYTHON/array/arraymethods.html" },
      { label: "Python - Array Exercises", file: "turorials files/PYTHON/array/arrayexercises.html" },


      { label: "Python File Handling", isTitle: true},

      { label: "Python - File Handling", file: "turorials files/PYTHON/filehandeling/filehandeling.html" },
      { label: "Python - Write to File", file: "turorials files/PYTHON/filehandeling/writetofiles.html" },
      { label: "Python - Read Files", file: "turorials files/PYTHON/filehandeling/readtofiles.html" },
      { label: "Python - Renaming and Deleting Files", file: "turorials files/PYTHON/filehandeling/renaminganddeletingfiles.html" },
      { label: "Python - Directories", file: "turorials files/PYTHON/filehandeling/directories.html" },
      { label: "Python - File Methods", file: "turorials files/PYTHON/filehandeling/filemethod.html" },
      { label: "Python - OS File/Directory Methods", file: "turorials files/PYTHON/filehandeling/osfiledirectorymethods.html" },
      { label: "Python - OS Path Methods", file: "turorials files/PYTHON/filehandeling/ospathmethods.html" },


      { label: "Object Oriented Programming", isTitle: true},

      { label: "Python - OOPs Concepts", file: "turorials files/PYTHON/objectorientedprogramming/oopsconcepts.html" },
      { label: "Python - Classes & Objects", file: "turorials files/PYTHON/objectorientedprogramming/classandobject.html" },
      { label: "Python - Class Attributes", file: "turorials files/PYTHON/objectorientedprogramming/classattributes.html" },
      { label: "Python - Class Methods", file: "turorials files/PYTHON/objectorientedprogramming/classmethods.html" },
      { label: "Python - Static Methods", file: "turorials files/PYTHON/objectorientedprogramming/staticmethods.html" },
      { label: "Python - Constructors", file: "turorials files/PYTHON/objectorientedprogramming/constructors.html" },
      { label: "Python - Access Modifiers", file: "turorials files/PYTHON/objectorientedprogramming/accessmodifier.html" },
      { label: "Python - Inheritance", file: "turorials files/PYTHON/objectorientedprogramming/inheritance.html" },
      { label: "Python - Multiple Inheritance", file: "turorials files/PYTHON/objectorientedprogramming/multipleinheritance.html" },
      { label: "Python - Polymorphism", file: "turorials files/PYTHON/objectorientedprogramming/polymorphism.html" },
      { label: "Python - Method Overriding", file: "turorials files/PYTHON/objectorientedprogramming/methodsoverriding.html" },
      { label: "Python - Method Overloading", file: "turorials files/PYTHON/objectorientedprogramming/methodsoverloading.html" },
      { label: "Python - Dynamic Binding", file: "turorials files/PYTHON/objectorientedprogramming/dynamicbinding.html" },
      { label: "Python - Dynamic Typing", file: "turorials files/PYTHON/objectorientedprogramming/dynamictyping.html" },
      { label: "Python - Abstraction", file: "turorials files/PYTHON/objectorientedprogramming/abstraction.html" },
      { label: "Python - Encapsulation", file: "turorials files/PYTHON/objectorientedprogramming/encapsulation.html" },
      { label: "Python - Interfaces", file: "turorials files/PYTHON/objectorientedprogramming/interfaces.html" },
      { label: "Python - Packages", file: "turorials files/PYTHON/objectorientedprogramming/packages.html" },
      { label: "Python - Inner Classes", file: "turorials files/PYTHON/objectorientedprogramming/innerclass.html" },
      { label: "Python - Anonymous Class and Objects", file: "turorials files/PYTHON/objectorientedprogramming/anonymousclassandobject.html" },
      { label: "Python - Singleton Class", file: "turorials files/PYTHON/objectorientedprogramming/singletonclass.html" },
      { label: "Python - Wrapper Classes", file: "turorials files/PYTHON/objectorientedprogramming/wrapperclass.html" },
      { label: "Python - Enums", file: "turorials files/PYTHON/objectorientedprogramming/enums.html" },
      { label: "Python - Reflection", file: "turorials files/PYTHON/objectorientedprogramming/reflection.html" },
      
      // Errors & Exceptions
      { label: "Python Errors & Exceptions", isTitle: true},

      { label: "Python - Syntax Errors", file: "turorials files/PYTHON/errorsandexceptions/syntaxerror.html" },
      { label: "Python - Exceptions", file: "turorials files/PYTHON/errorsandexceptions/exception.html" },
      { label: "Python - try-except Block", file: "turorials files/PYTHON/errorsandexceptions/tryexceptblock.html" },
      { label: "Python - try-finally Block", file: "turorials files/PYTHON/errorsandexceptions/tryfinallyblock.html" },
      { label: "Python - Raising Exceptions", file: "turorials files/PYTHON/errorsandexceptions/raisingexception.html" },
      { label: "Python - Exception Chaining", file: "turorials files/PYTHON/errorsandexceptions/exceptionchaining.html" },
      { label: "Python - Nested try Block", file: "turorials files/PYTHON/errorsandexceptions/nestedtryblock.html" },
      { label: "Python - User-defined Exception", file: "turorials files/PYTHON/errorsandexceptions/userdefinedexception.html" },
      { label: "Python - Logging", file: "turorials files/PYTHON/errorsandexceptions/logging.html" },
      { label: "Python - Assertions", file: "turorials files/PYTHON/errorsandexceptions/assertions.html" },
      { label: "Python - Warnings", file: "turorials files/PYTHON/errorsandexceptions/warnings.html" },
      { label: "Python - Built-in Exceptions", file: "turorials files/PYTHON/errorsandexceptions/builtinexceptions.html" },
      
      // Multithreading
      { label: "Python Multithreading", isTitle: true},

      { label: "Python - Multithreading", file: "turorials files/PYTHON/multithreading/multithreading.html" },
      { label: "Python - Thread Life Cycle", file: "turorials files/PYTHON/multithreading/threadlifecycle.html" },
      { label: "Python - Creating a Thread", file: "turorials files/PYTHON/multithreading/creatingathread.html" },
      { label: "Python - Starting a Thread", file: "turorials files/PYTHON/multithreading/startingathread.html" },
      { label: "Python - Joining Threads", file: "turorials files/PYTHON/multithreading/joiningthreads.html" },
      { label: "Python - Naming Thread", file: "turorials files/PYTHON/multithreading/namingthread.html" },
      { label: "Python - Thread Scheduling", file: "turorials files/PYTHON/multithreading/threadscheduling.html" },
      { label: "Python - Thread Pools", file: "turorials files/PYTHON/multithreading/threadpools.html" },
      { label: "Python - Main Thread", file: "turorials files/PYTHON/multithreading/mainthreads.html" },
      { label: "Python - Thread Priority", file: "turorials files/PYTHON/multithreading/threadpriority.html" },
      { label: "Python - Daemon Threads", file: "turorials files/PYTHON/multithreading/daemonthread.html" },
      { label: "Python - Synchronizing Threads", file: "turorials files/PYTHON/multithreading/synchronizingthread.html" },
      
      // Synchronization
      { label: "Python Synchronization", isTitle: true},

      { label: "Python - Inter-thread Communication", file: "turorials files/PYTHON/synchronization/interthreadcommunication.html" },
      { label: "Python - Thread Deadlock", file: "turorials files/PYTHON/synchronization/threaddeadlock.html" },
      { label: "Python - Interrupting a Thread", file: "turorials files/PYTHON/synchronization/interruptingathread.html" },
      
      // Networking
      { label: "Python Networking", isTitle: true},

      { label: "Python - Networking", file: "turorials files/PYTHON/networking/networking.html" },
      { label: "Python - Socket Programming", file: "turorials files/PYTHON/networking/socketprogramming.html" },
      { label: "Python - URL Processing", file: "turorials files/PYTHON/networking/urlprocessing.html" },
      { label: "Python - Generics", file: "turorials files/PYTHON/networking/generics.html" },
      
      // Libraries
      { label: "Python Libraries", isTitle: true},

      { label: "NumPy Tutorial", file: "turorials files/PYTHON/libraries/numpy.html" },
      { label: "Pandas Tutorial", file: "turorials files/PYTHON/libraries/pandas.html" },
      { label: "SciPy Tutorial", file: "turorials files/PYTHON/libraries/scipy.html" },
      { label: "Matplotlib Tutorial", file: "turorials files/PYTHON/libraries/matplotlib.html" },
      { label: "Django Tutorial", file: "turorials files/PYTHON/libraries/django.html" },
      { label: "OpenCV Tutorial", file: "turorials files/PYTHON/libraries/openCV.html" },
      
      
      // Miscellaneous
      { label: "Python Miscellenous", isTitle: true},

      { label: "Python - Date & Time", file: "turorials files/PYTHON/miscellenous/dateandtime.html" },
      { label: "Python - Maths", file: "turorials files/PYTHON/miscellenous/maths.html" },
      { label: "Python - Iterators", file: "turorials files/PYTHON/miscellenous/iterator.html" },
      { label: "Python - Generators", file: "turorials files/PYTHON/miscellenous/generator.html" },
      { label: "Python - Closures", file: "turorials files/PYTHON/miscellenous/closure.html" },
      { label: "Python - Decorators", file: "turorials files/PYTHON/miscellenous/decorators.html" },
      { label: "Python - Recursion", file: "turorials files/PYTHON/miscellenous/recursion.html" },
      { label: "Python - Reg Expressions", file: "turorials files/PYTHON/miscellenous/regexpression.html" },
      { label: "Python - PIP", file: "turorials files/PYTHON/miscellenous/pip.html" },
      { label: "Python - Database Access", file: "turorials files/PYTHON/miscellenous/databaseaccess.html" },
      { label: "Python - Weak References", file: "turorials files/PYTHON/miscellenous/weakreferences.html" },
      { label: "Python - Serialization", file: "turorials files/PYTHON/miscellenous/serialization.html" },
      { label: "Python - Templating", file: "turorials files/PYTHON/miscellenous/templating.html" },
      { label: "Python - Output Formatting", file: "turorials files/PYTHON/miscellenous/outputformatting.html" },
      { label: "Python - Performance Measurement", file: "turorials files/PYTHON/miscellenous/performancemeasurement.html" },
      { label: "Python - Data Compression", file: "turorials files/PYTHON/miscellenous/datacompression.html" },
      { label: "Python - CGI Programming", file: "turorials files/PYTHON/miscellenous/cgiprogramming.html" },
      { label: "Python - XML Processing", file: "turorials files/PYTHON/miscellenous/xmlprocessing.html" },
      { label: "Python - GUI Programming", file: "turorials files/PYTHON/miscellenous/guiprogramming.html" },
      { label: "Python - Command-Line Arguments", file: "turorials files/PYTHON/miscellenous/commandlinearguments.html" },
      { label: "Python - Docstrings", file: "turorials files/PYTHON/miscellenous/docstrings.html" },
      { label: "Python - JSON", file: "turorials files/PYTHON/miscellenous/json.html" },
      { label: "Python - Sending Email", file: "turorials files/PYTHON/miscellenous/sendingemail.html" },
      { label: "Python - Further Extensions", file: "turorials files/PYTHON/miscellenous/furtherextensions.html" },
      { label: "Python - Tools/Utilities", file: "turorials files/PYTHON/miscellenous/toolsutilities.html" },
      { label: "Python - GUIs", file: "turorials files/PYTHON/miscellenous/guis.html" },
      

      // Advanced Concepts
      { label: "Python Advanced Concepts", isTitle: true},

      { label: "Python - Abstract Base Classes", file: "turorials files/PYTHON/advanceconcepts/abstractbaseclasses.html" },
      { label: "Python - Custom Exceptions", file: "turorials files/PYTHON/advanceconcepts/customexception.html" },
      { label: "Python - Higher Order Functions", file: "turorials files/PYTHON/advanceconcepts/higherorderfunctions.html" },
      { label: "Python - Object Internals", file: "turorials files/PYTHON/advanceconcepts/objectinternals.html" },
      { label: "Python - Memory Management", file: "turorials files/PYTHON/advanceconcepts/memorymanagement.html" },
      { label: "Python - Metaclasses", file: "turorials files/PYTHON/advanceconcepts/metaclasses.html" },
      { label: "Python - Metaprogramming with Metaclasses", file: "turorials files/PYTHON/advanceconcepts/metaprogrammingwithmetaclasses.html" },
      { label: "Python - Mocking and Stubbing", file: "turorials files/PYTHON/advanceconcepts/mockingandstubbing.html" },
      { label: "Python - Monkey Patching", file: "turorials files/PYTHON/advanceconcepts/monkeypatching.html" },
      { label: "Python - Signal Handling", file: "turorials files/PYTHON/advanceconcepts/signalhandeling.html" },
      { label: "Python - Type Hints", file: "turorials files/PYTHON/advanceconcepts/typehints.html" },
      { label: "Python - Automation Tutorial", file: "turorials files/PYTHON/advanceconcepts/automationtutorials.html" },
      { label: "Python - Humanize Package", file: "turorials files/PYTHON/advanceconcepts/humanizepackage.html" },
      { label: "Python - Context Managers", file: "turorials files/PYTHON/advanceconcepts/contextmanagers.html" },
      { label: "Python - Coroutines", file: "turorials files/PYTHON/advanceconcepts/coroutines.html" },
      { label: "Python - Descriptors", file: "turorials files/PYTHON/advanceconcepts/descriptors.html" },
      { label: "Python - Diagnosing and Fixing Memory Leaks", file: "turorials files/PYTHON/advanceconcepts/diagnosingandfixingmemoryleaks.html" },
      { label: "Python - Immutable Data Structures", file: "turorials files/PYTHON/advanceconcepts/immutabledatastructures.html" },
      
      // Useful Resources
      { label: "Python Useful Resources", isTitle: true},
      { label: "Python - Questions & Answers", file: "turorials files/PYTHON/usefulresources/questionsandanswers.html" },
      { label: "Python - Interview Questions & Answers", file: "turorials files/PYTHON/usefulresources/interviewquestionsandanswers.html" },
      { label: "Python - Online Quiz", file: "turorials files/PYTHON/usefulresources/onlinequiz.html" },
      { label: "Python - Quick Guide", file: "turorials files/PYTHON/usefulresources/quickguide.html" },
      { label: "Python - Reference", file: "turorials files/PYTHON/usefulresources/references.html" },
      { label: "Python - Cheatsheet", file: "turorials files/PYTHON/usefulresources/cheatsheet.html" },
      { label: "Python - Projects", file: "turorials files/PYTHON/usefulresources/projects.html" },
      { label: "Python - Useful Resources", file: "turorials files/PYTHON/usefulresources/usefulresources.html" },
      { label: "Python - Discussion", file: "turorials files/PYTHON/usefulresources/discussion.html" },
      
      
    ],
  },

  flask: {
  title: "Flask",
  links: [
    // Core Flask Topics
    { label: "Flask - Home", file: "turorials files/FLASK/tutorials/home.html" },
    { label: "Flask - Overview", file: "turorials files/FLASK/tutorials/overview.html" },
    { label: "Flask - Environment", file: "turorials files/FLASK/tutorials/environment.html" },
    { label: "Flask - Application", file: "turorials files/FLASK/tutorials/application.html" },
    { label: "Flask - Routing", file: "turorials files/FLASK/tutorials/routing.html" },
    { label: "Flask - Variable Rules", file: "turorials files/FLASK/tutorials/variablerules.html" },
    { label: "Flask - URL Building", file: "turorials files/FLASK/tutorials/urlbuilding.html" },
    { label: "Flask - HTTP Methods", file: "turorials files/FLASK/tutorials/httpmethods.html" },
    { label: "Flask - Templates", file: "turorials files/FLASK/tutorials/templates.html" },
    { label: "Flask - Static Files", file: "turorials files/FLASK/tutorials/staticfiles.html" },
    { label: "Flask - Request Object", file: "turorials files/FLASK/tutorials/requestobject.html" },
    { label: "Sending Form Data to Template", file: "turorials files/FLASK/tutorials/sendingformdata.html" },
    { label: "Flask - Cookies", file: "turorials files/FLASK/tutorials/cookies.html" },
    { label: "Flask - Sessions", file: "turorials files/FLASK/tutorials/sessions.html" },
    { label: "Flask - Redirect & Errors", file: "turorials files/FLASK/tutorials/redirecterrors.html" },
    { label: "Flask - Message Flashing", file: "turorials files/FLASK/tutorials/messageflashing.html" },
    { label: "Flask - File Uploading", file: "turorials files/FLASK/tutorials/fileuploading.html" },
    { label: "Flask - Extensions", file: "turorials files/FLASK/tutorials/extensions.html" },
    { label: "Flask - Mail", file: "turorials files/FLASK/tutorials/mail.html" },
    { label: "Flask - WTF", file: "turorials files/FLASK/tutorials/wtf.html" },
    { label: "Flask - SQLite", file: "turorials files/FLASK/tutorials/sqlite.html" },
    { label: "Flask - SQLAlchemy", file: "turorials files/FLASK/tutorials/sqlalchemy.html" },
    { label: "Flask - Sijax", file: "turorials files/FLASK/tutorials/sijax.html" },
    { label: "Flask - Deployment", file: "turorials files/FLASK/tutorials/deployment.html" },
    { label: "Flask - FastCGI", file: "turorials files/FLASK/tutorials/fastcgi.html" },

    // References & Guides
    { label: "Flask - Quick Guide", file: "turorials files/FLASK/tutorials/quickguide.html" },
    { label: "Flask - Useful Resources", file: "turorials files/FLASK/tutorials/usefulresources.html" },
    { label: "Flask - Discussion", file: "turorials files/FLASK/tutorials/discussion.html" },

  ]
},

django: {
  title: "Django",
  links: [
    // Core Django Topics
    { label: "Django - Home", file: "turorials files/DJANGO/introduction/home.html" },
    { label: "Django - Basics", file: "turorials files/DJANGO/introduction/basics.html" },
    { label: "Django - Overview", file: "turorials files/DJANGO/introduction/overview.html" },
    { label: "Django - Environment", file: "turorials files/DJANGO/introduction/environment.html" },
    { label: "Django - Creating a Project", file: "turorials files/DJANGO/introduction/creatingproject.html" },
    { label: "Django - Apps Life Cycle", file: "turorials files/DJANGO/introduction/appslifecycle.html" },
    { label: "Django - Creating Views", file: "turorials files/DJANGO/introduction/creatingviews.html" },
    { label: "Django - URL Mapping", file: "turorials files/DJANGO/introduction/urlmapping.html" },
    { label: "Django - Index Page", file: "turorials files/DJANGO/introduction/indexpage.html" },
    { label: "Django - Templates System", file: "turorials files/DJANGO/introduction/templatessystem.html" },
    { label: "Django - MVT", file: "turorials files/DJANGO/introduction/mvt.html" },
    { label: "Django - Add Master Template", file: "turorials files/DJANGO/introduction/addmastertemplate.html" },

    // Django Admin Section
    { label: "Django Admin - Interface", file: "turorials files/DJANGO/admin/interface.html" },
    { label: "Django Admin - Create User", file: "turorials files/DJANGO/admin/createuser.html" },
    { label: "Django Admin - Include Models", file: "turorials files/DJANGO/admin/includemodels.html" },
    { label: "Django Admin - Set Fields to Display", file: "turorials files/DJANGO/admin/setfields.html" },
    { label: "Django Admin - Update Objects", file: "turorials files/DJANGO/admin/updateobjects.html" },

    // Django Models
    { label: "Django - Models", file: "turorials files/DJANGO/models/models.html" },
    { label: "Django - Insert Data", file: "turorials files/DJANGO/models/insertdata.html" },
    { label: "Django - Update Data", file: "turorials files/DJANGO/models/updatedata.html" },
    { label: "Django - Delete Data", file: "turorials files/DJANGO/models/deletedata.html" },
    { label: "Django - Update Model", file: "turorials files/DJANGO/models/updatemodel.html" },

    // Django Static Files
    { label: "Django - Add Static Files", file: "turorials files/DJANGO/staticfiles/addstaticfiles.html" },
    { label: "Django - Add CSS Files", file: "turorials files/DJANGO/staticfiles/addcssfiles.html" },

    // Django Advanced Topics
    { label: "Django - Page not Found (404)", file: "turorials files/DJANGO/advanced/pagenotfound.html" },
    { label: "Django - Page Redirection", file: "turorials files/DJANGO/advanced/pageredirection.html" },
    { label: "Django - Sending E-mails", file: "turorials files/DJANGO/advanced/sendingemails.html" },
    { label: "Django - Generic Views", file: "turorials files/DJANGO/advanced/genericviews.html" },
    { label: "Django - Form Processing", file: "turorials files/DJANGO/advanced/formprocessing.html" },
    { label: "Django - File Uploading", file: "turorials files/DJANGO/advanced/fileuploading.html" },
    { label: "Django - Apache Setup", file: "turorials files/DJANGO/advanced/apachesetup.html" },
    { label: "Django - Cookies Handling", file: "turorials files/DJANGO/advanced/cookieshandling.html" },
    { label: "Django - Sessions", file: "turorials files/DJANGO/advanced/sessions.html" },
    { label: "Django - Caching", file: "turorials files/DJANGO/advanced/caching.html" },
    { label: "Django - Comments", file: "turorials files/DJANGO/advanced/comments.html" },
    { label: "Django - RSS", file: "turorials files/DJANGO/advanced/rss.html" },
    { label: "Django - AJAX", file: "turorials files/DJANGO/advanced/ajax.html" },

    // References & Discussion
    { label: "Django - Quick Guide", file: "turorials files/DJANGO/advanced/quickguide.html" },
    { label: "Django - Useful Resources", file: "turorials files/DJANGO/advanced/usefulresources.html" },
    { label: "Django - Discussion", file: "turorials files/DJANGO/advanced/discussion.html" },

  ]
},

  numpy: {
    title: "NumPy",
    links: [
      { label: "NumPy HOME", file: "turorials files/PYTHON/NUMPY/introduction/home.html" },
      { label: "NumPy Intro", file: "turorials files/PYTHON/NUMPY/introduction/intro.html" },
      { label: "NumPy Getting Started", file: "turorials files/PYTHON/NUMPY/introduction/gettingstarted.html" },
      { label: "NumPy Creating Arrays", file: "turorials files/PYTHON/NUMPY/introduction/creatingarrays.html" },
      { label: "NumPy Array Indexing", file: "turorials files/PYTHON/NUMPY/introduction/arrayindexing.html" },
      { label: "NumPy Array Slicing", file: "turorials files/PYTHON/NUMPY/introduction/arrayslicing.html" },
      { label: "NumPy Data Types", file: "turorials files/PYTHON/NUMPY/introduction/datatypes.html" },
      { label: "NumPy Copy vs View", file: "turorials files/PYTHON/NUMPY/introduction/copyvsview.html" },
      { label: "NumPy Array Shape", file: "turorials files/PYTHON/NUMPY/introduction/arrayshape.html" },
      { label: "NumPy Array Reshape", file: "turorials files/PYTHON/NUMPY/introduction/arrayreshape.html" },
      { label: "NumPy Array Iterating", file: "turorials files/PYTHON/NUMPY/introduction/arrayiterating.html" },
      { label: "NumPy Array Join", file: "turorials files/PYTHON/NUMPY/introduction/arrayjoin.html" },
      { label: "NumPy Array Split", file: "turorials files/PYTHON/NUMPY/introduction/arraysplit.html" },
      { label: "NumPy Array Search", file: "turorials files/PYTHON/NUMPY/introduction/arraysearch.html" },
      { label: "NumPy Array Sort", file: "turorials files/PYTHON/NUMPY/introduction/arraysort.html" },
      { label: "NumPy Array Filter", file: "turorials files/PYTHON/NUMPY/introduction/arrayfilter.html" },
      
      { label: "NumPy Random", isTitle: true },
      { label: "Random Intro", file: "turorials files/PYTHON/NUMPY/random/intro.html" },
      { label: "Data Distribution", file: "turorials files/PYTHON/NUMPY/random/datadistribution.html" },
      { label: "Random Permutation", file: "turorials files/PYTHON/NUMPY/random/randompermutation.html" },
      { label: "Seaborn Module", file: "turorials files/PYTHON/NUMPY/random/seabornmodule.html" },
      { label: "Normal Distribution", file: "turorials files/PYTHON/NUMPY/random/normaldistribution.html" },
      { label: "Binomial Distribution", file: "turorials files/PYTHON/NUMPY/random/binomialdistribution.html" },
      { label: "Poisson Distribution", file: "turorials files/PYTHON/NUMPY/random/poissondistribution.html" },
      { label: "Uniform Distribution", file: "turorials files/PYTHON/NUMPY/random/uniformdistribution.html" },
      { label: "Logistic Distribution", file: "turorials files/PYTHON/NUMPY/random/logisticdistribution.html" },
      { label: "Multinomial Distribution", file: "turorials files/PYTHON/NUMPY/random/multinomialdistribution.html" },
      { label: "Exponential Distribution", file: "turorials files/PYTHON/NUMPY/random/exponentialdistribution.html" },
      { label: "Chi Square Distribution", file: "turorials files/PYTHON/NUMPY/random/chisquaredistribution.html" },
      { label: "Rayleigh Distribution", file: "turorials files/PYTHON/NUMPY/random/rayleighdistribution.html" },
      { label: "Pareto Distribution", file: "turorials files/PYTHON/NUMPY/random/paretodistribution.html" },
      { label: "Zipf Distribution", file: "turorials files/PYTHON/NUMPY/random/zipfdistribution.html" },
      
      { label: "NumPy ufunc", isTitle: true },
      { label: "ufunc Intro", file: "turorials files/PYTHON/NUMPY/ufunc/intro.html" },
      { label: "ufunc Create Function", file: "turorials files/PYTHON/NUMPY/ufunc/createfunction.html" },
      { label: "ufunc Simple Arithmetic", file: "turorials files/PYTHON/NUMPY/ufunc/simplearithmetic.html" },
      { label: "ufunc Rounding Decimals", file: "turorials files/PYTHON/NUMPY/ufunc/roundingdecimals.html" },
      { label: "ufunc Logs", file: "turorials files/PYTHON/NUMPY/ufunc/logs.html" },
      { label: "ufunc Summations", file: "turorials files/PYTHON/NUMPY/ufunc/summations.html" },
      { label: "ufunc Products", file: "turorials files/PYTHON/NUMPY/ufunc/products.html" },
      { label: "ufunc Differences", file: "turorials files/PYTHON/NUMPY/ufunc/differences.html" },
      { label: "ufunc Finding LCM", file: "turorials files/PYTHON/NUMPY/ufunc/findinglcm.html" },
      { label: "ufunc Finding GCD", file: "turorials files/PYTHON/NUMPY/ufunc/findinggcd.html" },
      { label: "ufunc Trigonometric", file: "turorials files/PYTHON/NUMPY/ufunc/trigonometric.html" },
      { label: "ufunc Hyperbolic", file: "turorials files/PYTHON/NUMPY/ufunc/hyperbolic.html" },
      { label: "ufunc Set Operations", file: "turorials files/PYTHON/NUMPY/ufunc/setoperations.html" },
      
      { label: "Quiz/Exercises", isTitle: true },
      { label: "NumPy Editor", file: "turorials files/PYTHON/NUMPY/quizexercises/editor.html" },
      { label: "NumPy Quiz", file: "turorials files/PYTHON/NUMPY/quizexercises/quiz.html" },
      { label: "NumPy Exercises", file: "turorials files/PYTHON/NUMPY/quizexercises/exercises.html" },
      { label: "NumPy Syllabus", file: "turorials files/PYTHON/NUMPY/quizexercises/syllabus.html" },
      { label: "NumPy Study Plan", file: "turorials files/PYTHON/NUMPY/quizexercises/studyplan.html" },
      { label: "NumPy Certificate", file: "turorials files/PYTHON/NUMPY/quizexercises/certifications.html" }
      
    ]
  },

  pandas: {
  title: "Pandas",
  links: [
    { label: "Pandas HOME", file: "turorials files/PYTHON/PANDAS/tutorials/home.html" },
    { label: "Pandas Intro", file: "turorials files/PYTHON/PANDAS/tutorials/intro.html" },
    { label: "Pandas Getting Started", file: "turorials files/PYTHON/PANDAS/tutorials/gettingstarted.html" },
    { label: "Pandas Series", file: "turorials files/PYTHON/PANDAS/tutorials/series.html" },
    { label: "Pandas DataFrames", file: "turorials files/PYTHON/PANDAS/tutorials/dataframe.html" },
    { label: "Pandas Read CSV", file: "turorials files/PYTHON/PANDAS/tutorials/readcsv.html" },
    { label: "Pandas Read JSON", file: "turorials files/PYTHON/PANDAS/tutorials/readjson.html" },
    { label: "Pandas Analyzing Data", file: "turorials files/PYTHON/PANDAS/tutorials/analyzingdata.html" },

    // Cleaning Data
    { label: "Cleaning Data", file: "turorials files/PYTHON/PANDAS/cleaningdata/cleaningdata.html" },
    { label: "Cleaning Empty Cells", file: "turorials files/PYTHON/PANDAS/cleaningdata/cleaningemptycells.html" },
    { label: "Cleaning Wrong Format", file: "turorials files/PYTHON/PANDAS/cleaningdata/cleaningwrongformat.html" },
    { label: "Cleaning Wrong Data", file: "turorials files/PYTHON/PANDAS/cleaningdata/cleaningwrongdata.html" },
    { label: "Removing Duplicates", file: "turorials files/PYTHON/PANDAS/cleaningdata/removingduplicates.html" },

    // Correlations
    { label: "Pandas Correlations", file: "turorials files/PYTHON/PANDAS/correlations/correlations.html" },

    // Plotting
    { label: "Pandas Plotting", file: "turorials files/PYTHON/PANDAS/plotting/plotting.html" },

    // Quiz/Exercises
    { label: "Pandas Editor", file: "turorials files/PYTHON/PANDAS/quizexercises/editor.html" },
    { label: "Pandas Quiz", file: "turorials files/PYTHON/PANDAS/quizexercises/quiz.html" },
    { label: "Pandas Exercises", file: "turorials files/PYTHON/PANDAS/quizexercises/exercises.html" },
    { label: "Pandas Syllabus", file: "turorials files/PYTHON/PANDAS/quizexercises/syllabus.html" },
    { label: "Pandas Study Plan", file: "turorials files/PYTHON/PANDAS/quizexercises/studyplan.html" },
    { label: "Pandas Certificate", file: "turorials files/PYTHON/PANDAS/quizexercises/certifications.html" },

    // References
    { label: "DataFrames Reference", file: "turorials files/PYTHON/PANDAS/references/dataframeresources.html" },
  ]
},

  r: {
    title: "R",
    links: [
      { label: "R - Home", file: "turorials files/R/introductions/home.html" },
      { label: "R - Overview", file: "turorials files/R/introductions/overview.html" },
      { label: "R - Environment Setup", file: "turorials files/R/introductions/environmentsetup.html" },
      { label: "R - Basic Syntax", file: "turorials files/R/introductions/basicsyntax.html" },
      { label: "R - Data Types", file: "turorials files/R/introductions/datatypes.html" },
      { label: "R - Variables", file: "turorials files/R/introductions/variables.html" },
      { label: "R - Operators", file: "turorials files/R/introductions/operators.html" },
      { label: "R - Decision Making", file: "turorials files/R/introductions/decisionmaking.html" },
      { label: "R - Loops", file: "turorials files/R/introductions/loops.html" },
      { label: "R - Functions", file: "turorials files/R/introductions/functions.html" },
      { label: "R - Strings", file: "turorials files/R/introductions/strings.html" },
      { label: "R - Vectors", file: "turorials files/R/introductions/vectors.html" },
      { label: "R - Lists", file: "turorials files/R/introductions/lists.html" },
      { label: "R - Matrices", file: "turorials files/R/introductions/matrices.html" },
      { label: "R - Arrays", file: "turorials files/R/introductions/arrays.html" },
      { label: "R - Factors", file: "turorials files/R/introductions/factors.html" },
      { label: "R - Data Frames", file: "turorials files/R/introductions/dataframes.html" },
      { label: "R - Packages", file: "turorials files/R/introductions/packages.html" },
      { label: "R - Data Reshaping", file: "turorials files/R/introductions/datareshaping.html" },
      { label: "R - CSV Files", file: "turorials files/R/introductions/csvfiles.html" },
      { label: "R - Excel Files", file: "turorials files/R/introductions/excelfiles.html" },
      { label: "R - Binary Files", file: "turorials files/R/introductions/binaryfiles.html" },
      { label: "R - XML Files", file: "turorials files/R/introductions/xmlfiles.html" },
      { label: "R - JSON Files", file: "turorials files/R/introductions/jsonfiles.html" },
      { label: "R - Web Data", file: "turorials files/R/introductions/webdata.html" },
      { label: "R - Database", file: "turorials files/R/introductions/database.html" },


      { label: "R - Charts & Graphs", isTitle: true},

      { label: "R - Pie Charts", file: "turorials files/R/Charts & Graphs/piecharts.html" },
      { label: "R - Bar Charts", file: "turorials files/R/Charts & Graphs/barcharts.html" },
      { label: "R - Boxplots", file: "turorials files/R/Charts & Graphs/boxplots.html" },
      { label: "R - Histograms", file: "turorials files/R/Charts & Graphs/histograms.html" },
      { label: "R - Line Graphs", file: "turorials files/R/Charts & Graphs/linegraphs.html" },
      { label: "R - Scatterplots", file: "turorials files/R/Charts & Graphs/scatterplots.html" },


      { label: "R Statistics Examples", isTitle: true},

      { label: "R - Mean, Median & Mode", file: "turorials files/R/statisticsexamples/meanmedianmode.html" },
      { label: "R - Linear Regression", file: "turorials files/R/statisticsexamples/linearregression.html" },
      { label: "R - Multiple Regression", file: "turorials files/R/statisticsexamples/multipleregression.html" },
      { label: "R - Logistic Regression", file: "turorials files/R/statisticsexamples/logisticregression.html" },
      { label: "R - Normal Distribution", file: "turorials files/R/statisticsexamples/normaldistribution.html" },
      { label: "R - Binomial Distribution", file: "turorials files/R/statisticsexamples/binomialdistribution.html" },
      { label: "R - Poisson Regression", file: "turorials files/R/statisticsexamples/poissonregression.html" },
      { label: "R - Analysis of Covariance", file: "turorials files/R/statisticsexamples/analysisofcovariance.html" },
      { label: "R - Time Series Analysis", file: "turorials files/R/statisticsexamples/timeseriesanalysis.html" },
      { label: "R - Nonlinear Least Square", file: "turorials files/R/statisticsexamples/nonlinearleastsquare.html" },
      { label: "R - Decision Tree", file: "turorials files/R/statisticsexamples/decisiontree.html" },
      { label: "R - Random Forest", file: "turorials files/R/statisticsexamples/randomforest.html" },
      { label: "R - Survival Analysis", file: "turorials files/R/statisticsexamples/survivalanalysis.html" },
      { label: "R - Chi Square Tests", file: "turorials files/R/statisticsexamples/chisquaretest.html" },


      { label: "R - Useful Resources", isTitle: true},

      { label: "R - Interview Questions", file: "turorials files/R/usefulsource/interviewquestions.html" },
      { label: "R - Quick Guide", file: "turorials files/R/usefulsource/quickguide.html" },
      { label: "R - Cheatsheet", file: "turorials files/R/usefulsource/cheatsheet.html" },
      { label: "R - Useful Resources", file: "turorials files/R/usefulsource/usefulresources.html" },
      { label: "R - Discussion", file: "turorials files/R/usefulsource/discussion.html" }
      
    ],
  },

  c: {
    title: "C",
    links: [
      { label: "C - Home", file: "turorials files/C/introduction/home.html" },
      { label: "C - Overview", file: "turorials files/C/introduction/overview.html" },
      { label: "C - Features", file: "turorials files/C/introduction/features.html" },
      { label: "C - History", file: "turorials files/C/introduction/history.html" },
      { label: "C - Standards", file: "turorials files/C/introduction/standards.html" },
      { label: "C - Environment Setup", file: "turorials files/C/introduction/environmentsetup.html" },
      { label: "C - Program Structure", file: "turorials files/C/introduction/programstructure.html" },
      { label: "C - Hello World", file: "turorials files/C/introduction/helloworld.html" },
      { label: "C - Compilation Process", file: "turorials files/C/introduction/compilationprocess.html" },
      { label: "C - Comments", file: "turorials files/C/introduction/comments.html" },
      { label: "C - Basic Syntax", file: "turorials files/C/introduction/basicsyntax.html" },
      { label: "C - User Input", file: "turorials files/C/introduction/userinput.html" },
      { label: "C - printf Function", file: "turorials files/C/introduction/printffunction.html" },
      { label: "C - Format Specifiers", file: "turorials files/C/introduction/formatspecifier.html" },
      
      { label: "Lexical Elements in C", isTitle: true },
      { label: "C - Tokens", file: "turorials files/C/lexicalelementinc/token.html" },
      { label: "C - Keywords", file: "turorials files/C/lexicalelementinc/keyword.html" },
      { label: "C - Identifiers", file: "turorials files/C/lexicalelementinc/identifiers.html" },
      
      { label: "Variables and Constants", isTitle: true },
      { label: "C - Variables", file: "turorials files/C/variableandconstants/variables.html" },
      { label: "C - Constants", file: "turorials files/C/variableandconstants/constants.html" },
      { label: "C - Const Qualifier", file: "turorials files/C/variableandconstants/constqualifier.html" },
      { label: "C - Linkage", file: "turorials files/C/variableandconstants/linkage.html" },
      
      { label: "Data Types and Type Conversions", isTitle: true },
      { label: "C - Data Types", file: "turorials files/C/datatypeandtypeconversions/datatype.html" },
      { label: "C - Literals", file: "turorials files/C/datatypeandtypeconversions/literals.html" },
      { label: "C - Escape Sequences", file: "turorials files/C/datatypeandtypeconversions/escapesequence.html" },
      { label: "C - Booleans", file: "turorials files/C/datatypeandtypeconversions/booleans.html" },
      { label: "C - Integer Promotions", file: "turorials files/C/datatypeandtypeconversions/integerpromotions.html" },
      { label: "C - Character Arithmetic", file: "turorials files/C/datatypeandtypeconversions/characterarithmetic.html" },
      { label: "C - Type Conversion", file: "turorials files/C/datatypeandtypeconversions/typeconversions.html" },
      { label: "C - Type Casting", file: "turorials files/C/datatypeandtypeconversions/typecasting.html" },
      
      { label: "Operators in C", isTitle: true },
      { label: "C - Operators", file: "turorials files/C/operators/operators.html" },
      { label: "C - Arithmetic Operators", file: "turorials files/C/operators/arithmeticoperators.html" },
      { label: "C - Unary Operators", file: "turorials files/C/operators/unaryoperators.html" },
      { label: "C - Relational Operators", file: "turorials files/C/operators/relationaloperators.html" },
      { label: "C - Logical Operators", file: "turorials files/C/operators/logicaloperators.html" },
      { label: "C - Bitwise Operators", file: "turorials files/C/operators/bitwiseoperators.html" },
      { label: "C - Assignment Operators", file: "turorials files/C/operators/assignmentoperators.html" },
      { label: "C - Increment and Decrement Operators", file: "turorials files/C/operators/incrementanddecrementoperators.html" },
      { label: "C - Ternary Operator", file: "turorials files/C/operators/ternaryoperators.html" },
      { label: "C - sizeof Operator", file: "turorials files/C/operators/sizeofoperator.html" },
      { label: "C - Operator Precedence", file: "turorials files/C/operators/operatorprecedence.html" },
      { label: "C - Miscellaneous Operators", file: "turorials files/C/operators/miscellaneousoperators.html" },
      
      { label: "Decision Making & Control Statements", isTitle: true },
      { label: "C - Decision Making", file: "turorials files/C/decisionmakingandcontrolstatement/decisionmaking.html" },
      { label: "C - if statement", file: "turorials files/C/decisionmakingandcontrolstatement/ifstatement.html" },
      { label: "C - if...else statement", file: "turorials files/C/decisionmakingandcontrolstatement/ifelsestatement.html" },
      { label: "C - Nested if statements", file: "turorials files/C/decisionmakingandcontrolstatement/nestedifstatement.html" },
      { label: "C - Switch statement", file: "turorials files/C/decisionmakingandcontrolstatement/switchstatement.html" },
      { label: "C - Nested switch statements", file: "turorials files/C/decisionmakingandcontrolstatement/nestedswitchstatement.html" },
      
      { label: "Loops in C", isTitle: true },

      { label: "C - Loops", file: "turorials files/C/loops/loops.html" },
      { label: "C - For Loop", file: "turorials files/C/loops/forloops.html" },
      { label: "C - While Loop", file: "turorials files/C/loops/whileloop.html" },
      { label: "C - Do...while Loop", file: "turorials files/C/loops/dowhileloop.html" },
      { label: "C - For Loop vs While Loop", file: "turorials files/C/loops/forloopvswhileloop.html" },
      { label: "C - Nested Loop", file: "turorials files/C/loops/nestedloops.html" },
      { label: "C - Infinite Loop", file: "turorials files/C/loops/infiniteloop.html" },
      { label: "C - Break Statement", file: "turorials files/C/loops/breakstatement.html" },
      { label: "C - Continue Statement", file: "turorials files/C/loops/continuestatement.html" },
      { label: "C - Goto Statement", file: "turorials files/C/loops/gotostatement.html" },
      
      { label: "Functions in C", isTitle: true },

      { label: "C - Functions", file: "turorials files/C/function/function.html" },
      { label: "C - Main Function", file: "turorials files/C/function/mainfunction.html" },
      { label: "C - Function call by Value", file: "turorials files/C/function/functioncallbyvalue.html" },
      { label: "C - Function call by Reference", file: "turorials files/C/function/functioncallbyreference.html" },
      { label: "C - Nested Functions", file: "turorials files/C/function/nestedfunction.html" },
      { label: "C - Variadic Functions", file: "turorials files/C/function/variadicfunction.html" },
      { label: "C - User-Defined Functions", file: "turorials files/C/function/userdefinedfunction.html" },
      { label: "C - Callback Function", file: "turorials files/C/function/callbackfunction.html" },
      { label: "C - Return Statement", file: "turorials files/C/function/returnstatement.html" },
      { label: "C - Recursion", file: "turorials files/C/function/recursion.html" },
      
      { label: "Scope Rules in C", isTitle: true },
      { label: "C - Scope Rules", file: "turorials files/C/scoperule/scoperule.html" },
      { label: "C - Static Variables", file: "turorials files/C/scoperule/staticvariable.html" },
      { label: "C - Global Variables", file: "turorials files/C/scoperule/globalvariable.html" },
      
      { label: "Arrays in C", isTitle: true },
      { label: "C - Arrays", file: "turorials files/C/array/arrays.html" },
      { label: "C - Properties of Array", file: "turorials files/C/array/propertiesofarray.html" },
      { label: "C - Multi-Dimensional Arrays", file: "turorials files/C/array/multidimensionalarray.html" },
      { label: "C - Passing Arrays to Function", file: "turorials files/C/array/passingarraytofunction.html" },
      { label: "C - Return Array from Function", file: "turorials files/C/array/returnarraytofunction.html" },
      { label: "C - Variable Length Arrays", file: "turorials files/C/array/variablelengtharray.html" },
      
      { label: "Strings in C", isTitle: true },
      { label: "C - Strings", file: "turorials files/C/strings/strings.html" },
      { label: "C - Array of Strings", file: "turorials files/C/strings/arrayofstring.html" },
      { label: "C - Special Characters", file: "turorials files/C/strings/specialcharacters.html" },
      
      { label: "Structures and Unions", isTitle: true },
      { label: "C - Structures", file: "turorials files/C/structuresandunions/structures.html" },
      { label: "C - Structures and Functions", file: "turorials files/C/structuresandunions/structuresandfunctions.html" },
      { label: "C - Arrays of Structures", file: "turorials files/C/structuresandunions/arrayofstructures.html" },
      { label: "C - Self-Referential Structures", file: "turorials files/C/structuresandunions/selfreferentialarray.html" },
      { label: "C - Dot (.) Operator", file: "turorials files/C/structuresandunions/dotoperator.html" },
      { label: "C - Lookup Tables", file: "turorials files/C/structuresandunions/lookuptable.html" },
      { label: "C - Enumeration (or enum)", file: "turorials files/C/structuresandunions/enumeration.html" },
      { label: "C - Structure Padding and Packing", file: "turorials files/C/structuresandunions/structurepaddingandpacking.html" },
      { label: "C - Nested Structures", file: "turorials files/C/structuresandunions/nestedstructures.html" },
      { label: "C - Anonymous Structure and Union", file: "turorials files/C/structuresandunions/anonymousstructureandunions.html" },
      { label: "C - Unions", file: "turorials files/C/structuresandunions/unions.html" },
      { label: "C - Bit Fields", file: "turorials files/C/structuresandunions/bitfields.html" },
      { label: "C - Typedef", file: "turorials files/C/structuresandunions/typedef.html" },
      
      { label: "Pointers in C", isTitle: true },
      { label: "C - Pointers", file: "turorials files/C/pointers/pointers.html" },
      { label: "C - Pointers and Arrays", file: "turorials files/C/pointers/pointersandarrays.html" },
      { label: "C - Applications of Pointers", file: "turorials files/C/pointers/applicationsofpointers.html" },
      { label: "C - Pointer Arithmetics", file: "turorials files/C/pointers/pointerarithmetics.html" },
      { label: "C - Array of Pointers", file: "turorials files/C/pointers/arrayofpointers.html" },
      { label: "C - Pointer to Pointer", file: "turorials files/C/pointers/pointertopointer.html" },
      { label: "C - Function Pointers", file: "turorials files/C/pointers/functionpointers.html" },
      { label: "C - Passing Pointers to Functions", file: "turorials files/C/pointers/passingpointerstofunctions.html" },
      { label: "C - Return Pointer from Functions", file: "turorials files/C/pointers/returnpointerfromfunction.html" },
      { label: "C - Pointer to an Array", file: "turorials files/C/pointers/pointertoarray.html" },
      { label: "C - Pointers vs. Multi-dimensional Arrays", file: "turorials files/C/pointers/pointersvsmultidimensionalarray.html" },
      { label: "C - Character Pointers and Functions", file: "turorials files/C/pointers/characterpointersandfunctions.html" },
      { label: "C - NULL Pointer", file: "turorials files/C/pointers/nullpointer.html" },
      { label: "C - void Pointer", file: "turorials files/C/pointers/voidpointer.html" },
      { label: "C - Dangling Pointers", file: "turorials files/C/pointers/danglingpointers.html" },
      { label: "C - Dereference Pointer", file: "turorials files/C/pointers/dereferencepointer.html" },
      { label: "C - Near, Far and Huge Pointers", file: "turorials files/C/pointers/nearfarhugepointers.html" },
      { label: "C - Pointers to Structures", file: "turorials files/C/pointers/pointerstostructures.html" },
      { label: "C - Chain of Pointers", file: "turorials files/C/pointers/chainofpointer.html" },
      { label: "C - Pointer vs Array", file: "turorials files/C/pointers/pointervsarray.html" },
      { label: "C - Initialization of Pointer Arrays", file: "turorials files/C/pointers/initializationofpointerarray.html" },
      
      { label: "Storage Classes and Qualifiers", isTitle: true },
      { label: "C - Storage Classes", file: "turorials files/C/storageclassandqualifiers/storageclasses.html" },
      
      { label: "Memory Management ", isTitle: true },
      { label: "C - Memory Management", file: "turorials files/C/memorymanagement/memorymanagement.html" },
      { label: "C - Memory Address", file: "turorials files/C/memorymanagement/memoryaddress.html" },
      
      { label: "Preprocessors in C", isTitle: true },
      { label: "C - Preprocessors", file: "turorials files/C/preprocessor/preprocessor.html" },
      { label: "C - Pragmas", file: "turorials files/C/preprocessor/pragmas.html" },
      { label: "C - Preprocessor Operators", file: "turorials files/C/preprocessor/preprocessoroperators.html" },

      { label: "File Handling in C", isTitle: true },
      { label: "C - File I/O (File Handling)", file: "turorials files/C/filehandeling/fileio.html" },
      { label: "C - Input & Output", file: "turorials files/C/filehandeling/filehandeling.html" },
      
      { label: "Constants and Literals in C", isTitle: true },
      { label: "C - Macros", file: "turorials files/C/constantsandliterals/macros.html" },
      { label: "C - Header Files", file: "turorials files/C/constantsandliterals/headerfile.html" },
      
      { label: "Miscellaneous Topics", isTitle: true },

      { label: "C - Error Handling", file: "turorials files/C/miscellaneoustopics/errorhandling.html" },
      { label: "C - Variable Arguments", file: "turorials files/C/miscellaneoustopics/variablearguments.html" },
      { label: "C - Command Execution", file: "turorials files/C/miscellaneoustopics/commandexecution.html" },
      { label: "C - Math Functions", file: "turorials files/C/miscellaneoustopics/mathfunctions.html" },
      { label: "C - Static Keyword", file: "turorials files/C/miscellaneoustopics/statickeyword.html" },
      { label: "C - Random Number Generation", file: "turorials files/C/miscellaneoustopics/randomnumbergeneration.html" },
      { label: "C - Command Line Arguments", file: "turorials files/C/miscellaneoustopics/commandlineargument.html" },
      
      { label: "C Programming Resources", isTitle: true },

      { label: "C - Questions & Answers", file: "turorials files/C/programmingresources/questionsandanswers.html" },
      { label: "C - Quick Guide", file: "turorials files/C/programmingresources/quickguide.html" },
      { label: "C - Cheat Sheet", file: "turorials files/C/programmingresources/cheatsheet.html" },
      { label: "C - Useful Resources", file: "turorials files/C/programmingresources/usefulresources.html" },
      { label: "C - Discussion", file: "turorials files/C/programmingresources/discussion.html" },
      { label: "C Online Compiler", file: "turorials files/C/programmingresources/onlinecompiler.html" }
      

    ]
  },

  cpp:{
  title: "C++",
  links: [
      { label: "C++ Home", file: "turorials files/CPP/introduction/home.html" },
      { label: "C++ Overview", file: "turorials files/CPP/introduction/overview.html" },
      { label: "C++ Environment Setup", file: "turorials files/CPP/introduction/environmentsetup.html" },
      { label: "C++ Basic Syntax", file: "turorials files/CPP/introduction/basicsyntax.html" },
      { label: "C++ Comments", file: "turorials files/CPP/introduction/comments.html" },
      { label: "C++ Hello World", file: "turorials files/CPP/introduction/helloworld.html" },
      { label: "C++ Omitting Namespace", file: "turorials files/CPP/introduction/omittingnamespace.html" },
      { label: "C++ Tokens", file: "turorials files/CPP/introduction/tokens.html" },
      { label: "C++ Constants/Literals", file: "turorials files/CPP/introduction/constantsliterals.html" },
      { label: "C++ Keywords", file: "turorials files/CPP/introduction/keywords.html" },
      { label: "C++ Identifiers", file: "turorials files/CPP/introduction/identifiers.html" },
      { label: "C++ Data Types", file: "turorials files/CPP/introduction/datatypes.html" },
      { label: "C++ Numeric Data Types", file: "turorials files/CPP/introduction/numericdatatypes.html" },
      { label: "C++ Character Data Type", file: "turorials files/CPP/introduction/characterdatatype.html" },
      { label: "C++ Boolean Data Type", file: "turorials files/CPP/introduction/booleandatatype.html" },
      { label: "C++ Variable Types", file: "turorials files/CPP/introduction/variabletypes.html" },
      { label: "C++ Variable Scope", file: "turorials files/CPP/introduction/variablescope.html" },
      { label: "C++ Multiple Variables", file: "turorials files/CPP/introduction/multiplevariables.html" },
      { label: "C++ Basic Input/Output", file: "turorials files/CPP/introduction/basicinputoutput.html" },
      { label: "C++ Modifier Types", file: "turorials files/CPP/introduction/modifiertypes.html" },
      { label: "C++ Storage Classes", file: "turorials files/CPP/introduction/storageclasses.html" },
      { label: "C++ Constexpr Specifier", file: "turorials files/CPP/introduction/constexprspecifier.html" },
      { label: "C++ Numbers", file: "turorials files/CPP/introduction/numbers.html" },
      { label: "C++ Enumeration", file: "turorials files/CPP/introduction/enumeration.html" },
      { label: "C++ Enum Class", file: "turorials files/CPP/introduction/enumclass.html" },
      { label: "C++ References", file: "turorials files/CPP/introduction/references.html" },
      { label: "C++ Date & Time", file: "turorials files/CPP/introduction/datetime.html" },
      { label: "C++ Operators", file: "turorials files/CPP/introduction/operators.html" },
      { label: "C++ Arithmetic Operators", file: "turorials files/CPP/introduction/arithmeticoperators.html" },
      { label: "C++ Relational Operators", file: "turorials files/CPP/introduction/relationaloperators.html" },
      { label: "C++ Logical Operators", file: "turorials files/CPP/introduction/logicaloperators.html" },
      { label: "C++ Bitwise Operators", file: "turorials files/CPP/introduction/bitwiseoperators.html" },
      { label: "C++ Assignment Operators", file: "turorials files/CPP/introduction/assignmentoperators.html" },
      { label: "C++ sizeof Operator", file: "turorials files/CPP/introduction/sizeofoperators.html" },
      { label: "C++ Conditional Operator", file: "turorials files/CPP/introduction/conditionaloperators.html" },
      { label: "C++ Comma Operator", file: "turorials files/CPP/introduction/commaoperators.html" },
      { label: "C++ Member Operators", file: "turorials files/CPP/introduction/memberoperators.html" },
      { label: "C++ Casting Operators", file: "turorials files/CPP/introduction/castingoperators.html" },
      { label: "C++ Pointer Operators", file: "turorials files/CPP/introduction/pointeroperators.html" },
      { label: "C++ Operators Precedence", file: "turorials files/CPP/introduction/operatorprecedence.html" },
      { label: "C++ Unary Operators", file: "turorials files/CPP/introduction/unaryoperators.html" },


      { label: "Control Statements", isTitle: true },

      { label: "C++ Decision Making", file: "turorials files/CPP/conditionalstatements/decisionmaking.html" },
      { label: "C++ if Statement", file: "turorials files/CPP/conditionalstatements/ifstatement.html" },
      { label: "C++ if else Statement", file: "turorials files/CPP/conditionalstatements/ifelsestatement.html" },
      { label: "C++ Nested if Statements", file: "turorials files/CPP/conditionalstatements/nestedifstatements.html" },
      { label: "C++ switch Statement", file: "turorials files/CPP/conditionalstatements/switchstatement.html" },
      { label: "C++ Nested switch Statements", file: "turorials files/CPP/conditionalstatements/nestedswitchstatements.html" },
      { label: "C++ Loop Types", file: "turorials files/CPP/conditionalstatements/looptypes.html" },
      { label: "C++ while Loop", file: "turorials files/CPP/conditionalstatements/whileloop.html" },
      { label: "C++ for Loop", file: "turorials files/CPP/conditionalstatements/forloop.html" },
      { label: "C++ do while Loop", file: "turorials files/CPP/conditionalstatements/dowhileloop.html" },
      { label: "C++ Foreach Loop", file: "turorials files/CPP/conditionalstatements/foreachloop.html" },
      { label: "C++ Nested Loops", file: "turorials files/CPP/conditionalstatements/nestedloops.html" },
      { label: "C++ break Statement", file: "turorials files/CPP/conditionalstatements/breakstatement.html" },
      { label: "C++ continue Statement", file: "turorials files/CPP/conditionalstatements/continuestatement.html" },
      { label: "C++ goto Statement", file: "turorials files/CPP/conditionalstatements/gotostatement.html" },


      { label: "Strings", isTitle: true },

      { label: "C++ Strings", file: "turorials files/CPP/strings/strings.html" },
      { label: "C++ Loop Through a String", file: "turorials files/CPP/strings/loopthroughastring.html" },
      { label: "C++ String Length", file: "turorials files/CPP/strings/stringlength.html" },
      { label: "C++ String Concatenation", file: "turorials files/CPP/strings/stringconcatenation.html" },
      { label: "C++ String Comparison", file: "turorials files/CPP/strings/stringcomparison.html" },


      { label: "Functions", isTitle: true },

      { label: "C++ Functions", file: "turorials files/CPP/functions/functions.html" },
      { label: "C++ Multiple Function Parameters", file: "turorials files/CPP/functions/multiplefunctionparameters.html" },
      { label: "C++ Recursive Function", file: "turorials files/CPP/functions/recursivefunction.html" },
      { label: "C++ Return Values", file: "turorials files/CPP/functions/returnvalues.html" },
      { label: "C++ Function Overloading", file: "turorials files/CPP/functions/functionoverloading.html" },
      { label: "C++ Function Overriding", file: "turorials files/CPP/functions/functionoverriding.html" },
      { label: "C++ Default Arguments", file: "turorials files/CPP/functions/defaultarguments.html" },


      { label: "Arrays", isTitle: true },

      { label: "C++ Arrays", file: "turorials files/CPP/arrays/arrays.html" },
      { label: "C++ Multidimensional Arrays", file: "turorials files/CPP/arrays/multidimensionalarrays.html" },
      { label: "C++ Pointer to an Array", file: "turorials files/CPP/arrays/pointertoanarray.html" },
      { label: "C++ Passing Arrays to Functions", file: "turorials files/CPP/arrays/passingarraystofunctions.html" },
      { label: "C++ Return Array from Functions", file: "turorials files/CPP/arrays/returnarrayfromfunctions.html" },
      
      
      { label: "Structure & Unions", isTitle: true },

      { label: "C++ Structures", file: "turorials files/CPP/structureandunion/structures.html" },
      { label: "C++ Unions", file: "turorials files/CPP/structureandunion/unions.html" },


      { label: "Pointers", isTitle: true },

      { label: "C++ Pointers", file: "turorials files/CPP/pointers/pointers.html" },
      { label: "C++ Dereferencing", file: "turorials files/CPP/pointers/dereferencing.html" },
      { label: "C++ Modify Pointers", file: "turorials files/CPP/pointers/modifypointers.html" },
      { label: "C++ Smart Pointers", file: "turorials files/CPP/pointers/smartpointers.html" },


      { label: "Class & Objects", isTitle: true },

      { label: "C++ Classes & Objects", file: "turorials files/CPP/classandobjects/classesandobjects.html" },
      { label: "C++ Class Member Functions", file: "turorials files/CPP/classandobjects/classmemberfunctions.html" },
      { label: "C++ Class Access Modifiers", file: "turorials files/CPP/classandobjects/classaccessmodifiers.html" },
      { label: "C++ Static Class Members", file: "turorials files/CPP/classandobjects/staticclassmembers.html" },
      { label: "C++ Static Data Members", file: "turorials files/CPP/classandobjects/staticdatamembers.html" },
      { label: "C++ Static Member Function", file: "turorials files/CPP/classandobjects/staticmemberfunction.html" },
      { label: "C++ Inline Functions", file: "turorials files/CPP/classandobjects/inlinefunctions.html" },
      { label: "C++ this Pointer", file: "turorials files/CPP/classandobjects/thispointer.html" },
      { label: "C++ Friend Functions", file: "turorials files/CPP/classandobjects/friendfunctions.html" },
      { label: "C++ Pointer to Classes", file: "turorials files/CPP/classandobjects/pointertoclasses.html" },

      
      { label: "Constructors", isTitle: true },

      { label: "C++ Constructor & Destructor", file: "turorials files/CPP/constructures/constructordestructor.html" },
      { label: "C++ Default Constructors", file: "turorials files/CPP/constructures/defaultconstructors.html" },
      { label: "C++ Parameterized Constructors", file: "turorials files/CPP/constructures/parameterizedconstructors.html" },
      { label: "C++ Copy Constructor", file: "turorials files/CPP/constructures/copyconstructor.html" },
      { label: "C++ Constructor Overloading", file: "turorials files/CPP/constructures/constructoroverloading.html" },
      { label: "C++ Constructor with Default Arguments", file: "turorials files/CPP/constructures/constructorwithdefaultarguments.html" },
      { label: "C++ Delegating Constructors", file: "turorials files/CPP/constructures/delegatingconstructors.html" },
      { label: "C++ Constructor Initialization List", file: "turorials files/CPP/constructures/constructorinitializationlist.html" },
      { label: "C++ Dynamic Initialization Using Constructors", file: "turorials files/CPP/constructures/dynamicinitializationusingconstructors.html" },


      { label: "Inheritance", isTitle: true },

      { label: "C++ Inheritance", file: "turorials files/CPP/inheritance/inheritance.html" },
      { label: "C++ Multiple Inheritance", file: "turorials files/CPP/inheritance/multipleinheritance.html" },
      { label: "C++ Multilevel Inheritance", file: "turorials files/CPP/inheritance/multilevelinheritance.html" },


      { label: "Object-oriented", isTitle: true },

      { label: "C++ Overloading", file: "turorials files/CPP/objectoriented/overloading.html" },
      { label: "C++ Polymorphism", file: "turorials files/CPP/objectoriented/polymorphism.html" },
      { label: "C++ Abstraction", file: "turorials files/CPP/objectoriented/abstraction.html" },
      { label: "C++ Encapsulation", file: "turorials files/CPP/objectoriented/encapsulation.html" },
      { label: "C++ Interfaces", file: "turorials files/CPP/objectoriented/interfaces.html" },
      { label: "C++ Virtual Function", file: "turorials files/CPP/objectoriented/virtualfunction.html" },
      { label: "C++ Pure Virtual Functions & Abstract Classes", file: "turorials files/CPP/objectoriented/purevirtualfunctionandabstractionclasses.html" },
      
      
      { label: "Design Patterns", isTitle: true },
      { label: "C++ Creational Design Patterns", file: "turorials files/CPP/designpattern/creationaldesignpatterns.html" },
      
      
      { label: "File Handling", isTitle: true },

      { label: "C++ Files and Streams", file: "turorials files/CPP/filehandeling/filesandstreams.html" },
      { label: "C++ Reading From File", file: "turorials files/CPP/filehandeling/readingfromfile.html" },


      { label: "Advanced", isTitle: true },

      { label: "C++ Exception Handling", file: "turorials files/CPP/advanced/exceptionhandling.html" },
      { label: "C++ Dynamic Memory", file: "turorials files/CPP/advanced/dynamicmemory.html" },
      { label: "C++ Namespaces", file: "turorials files/CPP/advanced/namespaces.html" },
      { label: "C++ Templates", file: "turorials files/CPP/advanced/templates.html" },
      { label: "C++ Preprocessor", file: "turorials files/CPP/advanced/preprocessor.html" },
      { label: "C++ Signal Handling", file: "turorials files/CPP/advanced/signalhandling.html" },
      { label: "C++ Multithreading", file: "turorials files/CPP/advanced/multithreading.html" },
      { label: "C++ Web Programming", file: "turorials files/CPP/advanced/webprogramming.html" },
      { label: "C++ Socket Programming", file: "turorials files/CPP/advanced/socketprogramming.html" },
      { label: "C++ Concurrency", file: "turorials files/CPP/advanced/concurrency.html" },
      { label: "C++ Advanced Concepts", file: "turorials files/CPP/advanced/advancedconcepts.html" },
      { label: "C++ Lambda Expression", file: "turorials files/CPP/advanced/lambdaexpression.html" },
      { label: "C++ unordered_multiset", file: "turorials files/CPP/advanced/unorderedmultiset.html" },


      { label: "Useful Resources", isTitle: true },

      { label: "C++ Questions and Answers", file: "turorials files/CPP/usefulresources/questionsandanswers.html" },
      { label: "C++ Quick Guide", file: "turorials files/CPP/usefulresources/quickguide.html" },
      { label: "C++ Cheatsheet", file: "turorials files/CPP/usefulresources/cheatsheet.html" },
      { label: "C++ STL Tutorial", file: "turorials files/CPP/usefulresources/stltutorial.html" },
      { label: "C++ Standard Library", file: "turorials files/CPP/usefulresources/standardlibrary.html" },
      { label: "C++ Useful Resources", file: "turorials files/CPP/usefulresources/usefulresources.html" },
      { label: "C++ Discussion", file: "turorials files/CPP/usefulresources/discussion.html" },
      { label: "C++ Online Compiler", file: "turorials files/CPP/usefulresources/onlinecompiler.html" }
    ]
},

csp:{
  title: "C#",
  links: [
      { label: "C# - Home", file: "turorials files/CSP/introduction/home.html" },
      { label: "C# - Overview", file: "turorials files/CSP/introduction/overview.html" },
      { label: "C# - Environment", file: "turorials files/CSP/introduction/environment.html" },
      { label: "C# - Program Structure", file: "turorials files/CSP/introduction/programstructure.html" },
      { label: "C# - Basic Syntax", file: "turorials files/CSP/introduction/basicsyntax.html" },
      { label: "C# - Data Types", file: "turorials files/CSP/introduction/datatypes.html" },
      { label: "C# - Type Conversion", file: "turorials files/CSP/introduction/typeconversion.html" },
      { label: "C# - Variables", file: "turorials files/CSP/introduction/variables.html" },
      { label: "C# - Constants", file: "turorials files/CSP/introduction/constants.html" },
      { label: "C# - Operators", file: "turorials files/CSP/introduction/operators.html" },
      { label: "C# - Arithmetic Operators", file: "turorials files/CSP/introduction/arithmeticoperators.html" },
      { label: "C# - Assignment Operators", file: "turorials files/CSP/introduction/assignmentoperators.html" },
      { label: "C# - Relational Operators", file: "turorials files/CSP/introduction/relationaloperators.html" },
      { label: "C# - Logical Operators", file: "turorials files/CSP/introduction/logicaloperators.html" },
      { label: "C# - Bitwise Operators", file: "turorials files/CSP/introduction/bitwiseoperators.html" },
      { label: "C# - Miscellaneous Operators", file: "turorials files/CSP/introduction/miscellaneousoperators.html" },
      { label: "C# - Operators Precedence", file: "turorials files/CSP/introduction/operatorsprecedence.html" },
      
      { label: "Conditional Statements", isTitle: true },

      { label: "C# - Decision Making", file: "turorials files/CSP/conditionalstatements/decisionmaking.html" },
      { label: "C# - If", file: "turorials files/CSP/conditionalstatements/if.html" },
      { label: "C# - If Else", file: "turorials files/CSP/conditionalstatements/ifelse.html" },
      { label: "C# - Nested If", file: "turorials files/CSP/conditionalstatements/nestedif.html" },
      { label: "C# - Switch", file: "turorials files/CSP/conditionalstatements/switch.html" },
      { label: "C# - Nested Switch", file: "turorials files/CSP/conditionalstatements/nestedswitch.html" },
      { label: "C# - Switch Expressions", file: "turorials files/CSP/conditionalstatements/switchexpressions.html" },
      
      { label: "Control Statements", isTitle: true },
      { label: "C# - Loops", file: "turorials files/CSP/controlstatements/loops.html" },
      { label: "C# - For Loop", file: "turorials files/CSP/controlstatements/forloop.html" },
      { label: "C# - While Loop", file: "turorials files/CSP/controlstatements/whileloop.html" },
      { label: "C# - Do While Loop", file: "turorials files/CSP/controlstatements/dowhileloop.html" },
      { label: "C# - Nested Loops", file: "turorials files/CSP/controlstatements/nestedloops.html" },
      { label: "C# - Break", file: "turorials files/CSP/controlstatements/break.html" },
      { label: "C# - Continue", file: "turorials files/CSP/controlstatements/continue.html" },
      { label: "C# - Foreach Loop", file: "turorials files/CSP/controlstatements/foreachloop.html" },
      { label: "C# - Goto Statement", file: "turorials files/CSP/controlstatements/gotostatement.html" },
      
      { label: "OOP & Data Handling", isTitle: true },

      { label: "C# - Encapsulation", file: "turorials files/CSP/oopanddatahandeling/encapsulation.html" },
      { label: "C# - Methods", file: "turorials files/CSP/oopanddatahandeling/methods.html" },
      { label: "C# - Nullables", file: "turorials files/CSP/oopanddatahandeling/nullables.html" },
      { label: "C# - Arrays", file: "turorials files/CSP/oopanddatahandeling/arrays.html" },
      { label: "C# - Strings", file: "turorials files/CSP/oopanddatahandeling/strings.html" },
      { label: "C# - Structure", file: "turorials files/CSP/oopanddatahandeling/structure.html" },
      { label: "C# - Enums", file: "turorials files/CSP/oopanddatahandeling/enums.html" },
      { label: "C# - Classes", file: "turorials files/CSP/oopanddatahandeling/classes.html" },
      { label: "C# - Inheritance", file: "turorials files/CSP/oopanddatahandeling/inheritance.html" },
      { label: "C# - Polymorphism", file: "turorials files/CSP/oopanddatahandeling/polymorphism.html" },
      { label: "C# - Operator Overloading", file: "turorials files/CSP/oopanddatahandeling/operatoroverloading.html" },
      { label: "C# - Interfaces", file: "turorials files/CSP/oopanddatahandeling/interfaces.html" },
      { label: "C# - Namespaces", file: "turorials files/CSP/oopanddatahandeling/namespaces.html" },
      { label: "C# - Preprocessor Directives", file: "turorials files/CSP/oopanddatahandeling/preprocessordirectives.html" },
      { label: "C# - Regular Expressions", file: "turorials files/CSP/oopanddatahandeling/regularexpressions.html" },
      { label: "C# - Exception Handling", file: "turorials files/CSP/oopanddatahandeling/exceptionhandling.html" },
      { label: "C# - File I/O", file: "turorials files/CSP/oopanddatahandeling/fileio.html" },
      
      { label: "Advanced Tutorial", isTitle: true },

      { label: "C# - Attributes", file: "turorials files/CSP/advancedtutorials/attributes.html" },
      { label: "C# - Reflection", file: "turorials files/CSP/advancedtutorials/reflection.html" },
      { label: "C# - Properties", file: "turorials files/CSP/advancedtutorials/properties.html" },
      { label: "C# - Indexers", file: "turorials files/CSP/advancedtutorials/indexers.html" },
      { label: "C# - Delegates", file: "turorials files/CSP/advancedtutorials/delegates.html" },
      { label: "C# - Events", file: "turorials files/CSP/advancedtutorials/events.html" },
      { label: "C# - Collections", file: "turorials files/CSP/advancedtutorials/collections.html" },
      { label: "C# - Generics", file: "turorials files/CSP/advancedtutorials/generics.html" },
      { label: "C# - LINQ", file: "turorials files/CSP/advancedtutorials/linq.html" },
      { label: "C# - IEnumerable vs IEnumerator", file: "turorials files/CSP/advancedtutorials/ienumerablevsienumerator.html" },
      { label: "C# - Anonymous Methods", file: "turorials files/CSP/advancedtutorials/anonymousmethods.html" },
      { label: "C# - Unsafe Codes", file: "turorials files/CSP/advancedtutorials/unsafecodes.html" },
      { label: "C# - Tasks and Parallel Programming", file: "turorials files/CSP/advancedtutorials/tasksandparallelprogramming.html" },
      { label: "C# - Multithreading", file: "turorials files/CSP/advancedtutorials/multithreading.html" },
      { label: "C# - Extension Methods", file: "turorials files/CSP/advancedtutorials/extensionmethods.html" },
      
      { label: "Useful Resources", isTitle: true },

      { label: "C# - Developer's AI Tools", file: "turorials files/CSP/usefulresources/developersaitools.html" },
      { label: "C# - Questions and Answers", file: "turorials files/CSP/usefulresources/questionsandanswers.html" },
      { label: "C# - Cheatsheet", file: "turorials files/CSP/usefulresources/cheatsheet.html" },
      { label: "C# - Quick Guide", file: "turorials files/CSP/usefulresources/quickguide.html" },
      { label: "C# - Useful Resources", file: "turorials files/CSP/usefulresources/usefulresources.html" },
      { label: "C# - Discussion", file: "turorials files/CSP/usefulresources/discussion.html" },
      { label: "C# - Online Compiler", file: "turorials files/CSP/usefulresources/onlinecompiler.html" }
      
  ]
},

dotnet: {
  title: ".NET Core",
  links: [
    { label: ".NET Core - Home", file: "turorials files/DOTNET/home.html" },
    { label: ".NET Core - Overview", file: "turorials files/DOTNET/overview.html" },
    { label: ".NET Core - Prerequisites", file: "turorials files/DOTNET/prerequisites.html" },
    { label: ".NET Core - Environment Setup", file: "turorials files/DOTNET/environmentsetup.html" },
    { label: ".NET Core - Getting Started", file: "turorials files/DOTNET/gettingstarted.html" },
    { label: ".NET Core - Numerics", file: "turorials files/DOTNET/numerics.html" },
    { label: ".NET Core - Garbage Collection", file: "turorials files/DOTNET/garbagecollection.html" },
    { label: ".NET Core - Code Execution", file: "turorials files/DOTNET/codeexecution.html" },
    { label: ".NET Core - Modularity", file: "turorials files/DOTNET/modularity.html" },
    { label: ".NET Core - Project Files", file: "turorials files/DOTNET/projectfiles.html" },
    { label: ".NET Core - Package References", file: "turorials files/DOTNET/packagereferences.html" },
    { label: "Create UWP App with .NET Core", file: "turorials files/DOTNET/createuwpapp.html" },
    { label: ".NET Core - MSBuild", file: "turorials files/DOTNET/msbuild.html" },
    { label: ".NET Core - Metapackage", file: "turorials files/DOTNET/metapackage.html" },
    { label: "Windows Runtime & Extension SDKs", file: "turorials files/DOTNET/windowsruntime.html" },
    { label: "Create .NET Standard Library", file: "turorials files/DOTNET/createstandardlibrary.html" },
    { label: ".NET Core - Portable Class Library", file: "turorials files/DOTNET/portableclasslibrary.html" },
    { label: "Adding References to Library", file: "turorials files/DOTNET/addingreferences.html" },
    { label: "Sharing .NET Core Libraries", file: "turorials files/DOTNET/sharinglibraries.html" },
    { label: "Creating a Xamarin.Forms Project", file: "turorials files/DOTNET/xamarinforms.html" },
    { label: ".NET Core - PCL Troubleshooting", file: "turorials files/DOTNET/pcltroubleshooting.html" },
    { label: ".NET Core - Create a Testing Project", file: "turorials files/DOTNET/createtestingproject.html" },
    { label: "Running Tests in Visual Studio", file: "turorials files/DOTNET/runningtests.html" },
    { label: ".NET Core - Testing Library", file: "turorials files/DOTNET/testinglibrary.html" },
    { label: "Managed Extensibility Framework", file: "turorials files/DOTNET/managedextensibilityframework.html" },
    { label: ".NET Core - SDK", file: "turorials files/DOTNET/sdk.html" },
    { label: ".NET Core - MSBuild & project.json", file: "turorials files/DOTNET/msbuildprojectjson.html" },
    { label: "Restoring and Building & MSBuild", file: "turorials files/DOTNET/restoringandbuilding.html" },
    { label: ".NET Core - Migrations", file: "turorials files/DOTNET/migrations.html" },
    { label: ".NET Core - Quick Guide", file: "turorials files/DOTNET/quickguide.html" },
    { label: ".NET Core - Useful Resources", file: "turorials files/DOTNET/usefulresources.html" },
    { label: ".NET Core - Discussion", file: "turorials files/DOTNET/discussion.html" },
  ]
},


java: {
  title: "Java",
  links: [
    // Java Introduction
    { label: "Java - Home", file: "turorials files/JAVA/introduction/home.html" },
    { label: "Java - Overview", file: "turorials files/JAVA/introduction/overview.html" },
    { label: "Java - History", file: "turorials files/JAVA/introduction/history.html" },
    { label: "Java - Features", file: "turorials files/JAVA/introduction/features.html" },
    { label: "Java Vs. C++", file: "turorials files/JAVA/introduction/javavsc++.html" },
    { label: "JVM - Java Virtual Machine", file: "turorials files/JAVA/introduction/jvm.html" },
    { label: "Java - JDK vs JRE vs JVM", file: "turorials files/JAVA/introduction/jdkjreandjvm.html" },
    { label: "Java - Environment Setup", file: "turorials files/JAVA/introduction/environmentsetup.html" },
    { label: "Java - Hello World Program", file: "turorials files/JAVA/introduction/helloworld.html" },
    { label: "Java - Comments", file: "turorials files/JAVA/introduction/comments.html" },
    { label: "Java - Basic Syntax", file: "turorials files/JAVA/introduction/basicsyntax.html" },
    { label: "Java - Variables", file: "turorials files/JAVA/introduction/variables.html" },
    { label: "Java - Data Types", file: "turorials files/JAVA/introduction/datatypes.html" },
    { label: "Java - Type Casting", file: "turorials files/JAVA/introduction/typecasting.html" },
    { label: "Java - Unicode System", file: "turorials files/JAVA/introduction/unicodesystem.html" },
    { label: "Java - User Input", file: "turorials files/JAVA/introduction/userinput.html" },
    { label: "Java - Date & Time", file: "turorials files/JAVA/introduction/dateandtime.html" },

    // Java Operators
    { label: "Java - Operators", file: "turorials files/JAVA/operator/operators.html" },
    { label: "Java - Arithmetic Operators", file: "turorials files/JAVA/operator/arithmeticoperators.html" },
    { label: "Java - Assignment Operators", file: "turorials files/JAVA/operator/assignmentoperators.html" },
    { label: "Java - Relational Operators", file: "turorials files/JAVA/operator/relationaloperators.html" },
    { label: "Java - Logical Operators", file: "turorials files/JAVA/operator/logicaloperators.html" },
    { label: "Java - Bitwise Operators", file: "turorials files/JAVA/operator/bitwiseoperators.html" },
    { label: "Java Operator Precedence & Associativity", file: "turorials files/JAVA/operator/operatorprecedenceandassociativity.html" },
    { label: "Java - Unary Operators", file: "turorials files/JAVA/operator/unaryoperators.html" },

    // Control Statements
    { label: "Java - Decision Making", file: "turorials files/JAVA/controlstatements/decisionmaking.html" },
    { label: "Java - If Else Statement", file: "turorials files/JAVA/controlstatements/ifelsestatement.html" },
    { label: "Java - Switch Statement", file: "turorials files/JAVA/controlstatements/switchstatement.html" },
    { label: "Java - Loop Control", file: "turorials files/JAVA/controlstatements/loopcontrol.html" },
    { label: "Java - For Loop", file: "turorials files/JAVA/controlstatements/forloop.html" },
    { label: "Java - For-Each Loop", file: "turorials files/JAVA/controlstatements/foreachloop.html" },
    { label: "Java - While Loop", file: "turorials files/JAVA/controlstatements/whileloop.html" },
    { label: "Java - Do While Loop", file: "turorials files/JAVA/controlstatements/dowhileloop.html" },
    { label: "Java - Break Statement", file: "turorials files/JAVA/controlstatements/breakstatement.html" },
    { label: "Java - Continue Statement", file: "turorials files/JAVA/controlstatements/continuestatement.html" },

    // Object-Oriented Programming
    { label: "Java - OOPs Concepts", file: "turorials files/JAVA/objectorientedprogramming/oopsconcept.html" },
    { label: "Java - Object & Classes", file: "turorials files/JAVA/objectorientedprogramming/objectandclass.html" },
    { label: "Java - Class Attributes", file: "turorials files/JAVA/objectorientedprogramming/classattributes.html" },
    { label: "Java - Class Methods", file: "turorials files/JAVA/objectorientedprogramming/classmethods.html" },
    { label: "Java - Methods", file: "turorials files/JAVA/objectorientedprogramming/methods.html" },
    { label: "Java - Variables Scope", file: "turorials files/JAVA/objectorientedprogramming/variablescope.html" },
    { label: "Java - Constructors", file: "turorials files/JAVA/objectorientedprogramming/constructors.html" },
    { label: "Java - Access Modifiers", file: "turorials files/JAVA/objectorientedprogramming/accessmodifiers.html" },
    { label: "Java - Inheritance", file: "turorials files/JAVA/objectorientedprogramming/inheritance.html" },
    { label: "Java - Aggregation", file: "turorials files/JAVA/objectorientedprogramming/aggregation.html" },
    { label: "Java - Polymorphism", file: "turorials files/JAVA/objectorientedprogramming/polymorphism.html" },
    { label: "Java - Overriding", file: "turorials files/JAVA/objectorientedprogramming/overriding.html" },
    { label: "Java - Dynamic Binding", file: "turorials files/JAVA/objectorientedprogramming/overriding.html" },
    { label: "Java - Method Overloading", file: "turorials files/JAVA/objectorientedprogramming/methodoverloading.html" },
    { label: "Java - Abstraction", file: "turorials files/JAVA/objectorientedprogramming/abstraction.html" },
    { label: "Java - Encapsulation", file: "turorials files/JAVA/objectorientedprogramming/encapsulation.html" },
    { label: "Java - Interfaces", file: "turorials files/JAVA/objectorientedprogramming/interfaces.html" },
    { label: "Java - Packages", file: "turorials files/JAVA/objectorientedprogramming/packages.html" },
    { label: "Java - Inner Classes", file: "turorials files/JAVA/objectorientedprogramming/innerclasses.html" },
    { label: "Java - Wrapper Classes", file: "turorials files/JAVA/objectorientedprogramming/wrapperclasses.html" },
    { label: "Java - Enums", file: "turorials files/JAVA/objectorientedprogramming/enums.html" },

    // File Handling
    { label: "Java - Files", file: "turorials files/JAVA/filehandeling/files.html" },
    { label: "Java - Create a File", file: "turorials files/JAVA/filehandeling/createafile.html" },
    { label: "Java - Write to File", file: "turorials files/JAVA/filehandeling/writetofile.html" },
    { label: "Java - Read Files", file: "turorials files/JAVA/filehandeling/readfiles.html" },
    { label: "Java - Delete Files", file: "turorials files/JAVA/filehandeling/deletefiles.html" },
    { label: "Java - Directories", file: "turorials files/JAVA/filehandeling/directories.html" },
    { label: "Java - I/O Streams", file: "turorials files/JAVA/filehandeling/iostreams.html" },

    // Exceptions
    { label: "Java - Exceptions", file: "turorials files/JAVA/errorandexception/exceptions.html" },
    { label: "Java - try-catch Block", file: "turorials files/JAVA/errorandexception/trycatchblock.html" },
    { label: "Java - try-with-resources", file: "turorials files/JAVA/errorandexception/trywithresources.html" },
    { label: "Java - multi-catch Block", file: "turorials files/JAVA/errorandexception/multicatchblock.html" },
    { label: "Java - nested-try Block", file: "turorials files/JAVA/errorandexception/nestedtryblock.html" },
    { label: "Java - Finally Block", file: "turorials files/JAVA/errorandexception/finallyblock.html" },
    { label: "Java - throw Exception", file: "turorials files/JAVA/errorandexception/throwexceptions.html" },
    { label: "Java - Exception Propagation", file: "turorials files/JAVA/errorandexception/exceptionpropagation.html" },
    { label: "Java - Built-in Exception", file: "turorials files/JAVA/errorandexception/bulitinexceptions.html" },
    { label: "Java - Custom Exception", file: "turorials files/JAVA/errorandexception/customexceptions.html" },

    // Multithreading
    { label: "Java - Multithreading", file: "turorials files/JAVA/multithreading/multithreading.html" },
    { label: "Java - Thread Life Cycle", file: "turorials files/JAVA/multithreading/threadlifecycle.html" },
    { label: "Java - Creating a Thread", file: "turorials files/JAVA/multithreading/creatingathread.html" },
    { label: "Java - Starting a Thread", file: "turorials files/JAVA/multithreading/startingathread.html" },
    { label: "Java - Joining Thread", file: "turorials files/JAVA/multithreading/joiningthreads.html" },
    { label: "Java - Naming Thread", file: "turorials files/JAVA/multithreading/namingathread.html" },
    { label: "Java - Thread Scheduler", file: "turorials files/JAVA/multithreading/threadscheduler.html" },
    { label: "Java - Thread Pools", file: "turorials files/JAVA/multithreading/threadpools.html" },
    { label: "Java - Main Thread", file: "turorials files/JAVA/multithreading/mainthread.html" },
    { label: "Java - Thread Priority", file: "turorials files/JAVA/multithreading/threadpriority.html" },
    { label: "Java - Daemon Threads", file: "turorials files/JAVA/multithreading/deamonthreads.html" },
    { label: "Java - Thread Group", file: "turorials files/JAVA/multithreading/threadgroup.html" },
    { label: "Java - Shutdown Hook", file: "turorials files/JAVA/multithreading/shutdownhook.html" },


    { label: "Java Synchronization", isTitle:true},

    { label: "Java - Synchronization", file: "turorials files/JAVA/synchronization/synchronization.html" },
    { label: "Java - Block Synchronization", file: "turorials files/JAVA/synchronization/blocksynchronization.html" },
    { label: "Java - Static Synchronization", file: "turorials files/JAVA/synchronization/staticsynchronization.html" },
    { label: "Java - Inter-thread Communication", file: "turorials files/JAVA/synchronization/interthreadcommunication.html" },
    { label: "Java - Thread Deadlock", file: "turorials files/JAVA/synchronization/threaddeadlock.html" },
    { label: "Java - Interrupting a Thread", file: "turorials files/JAVA/synchronization/interruptingathread.html" },
    { label: "Java - Thread Control", file: "turorials files/JAVA/synchronization/threadcontrol.html" },
    { label: "Java - Reentrant Monitor", file: "turorials files/JAVA/synchronization/reentrantmonitor.html" },
    
    // Java Networking
    { label: "Java - Networking", file: "turorials files/JAVA/networking/networking.html" },
    { label: "Java - Socket Programming", file: "turorials files/JAVA/networking/socketprogramming.html" },
    { label: "Java - URL Processing", file: "turorials files/JAVA/networking/urlprocessing.html" },
    { label: "Java - URL Class", file: "turorials files/JAVA/networking/urlclass.html" },
    { label: "Java - URLConnection Class", file: "turorials files/JAVA/networking/urlconnectionclass.html" },
    { label: "Java - HttpURLConnection Class", file: "turorials files/JAVA/networking/httpurlconnection.html" },
    { label: "Java - Socket Class", file: "turorials files/JAVA/networking/socketclass.html" },
    { label: "Java - Generics", file: "turorials files/JAVA/networking/generics.html" },

    // Java Collections Framework
    { label: "Java - Collections", file: "turorials files/JAVA/collections/collections.html" },
    { label: "Java - Collection Interface", file: "turorials files/JAVA/collections/collectioninterface.html" },

    // Java Interfaces
    { label: "Java - List Interface", file: "turorials files/JAVA/interfaces/listinterface.html" },
    { label: "Java - Queue Interface", file: "turorials files/JAVA/interfaces/queueinterface.html" },
    { label: "Java - Map Interface", file: "turorials files/JAVA/interfaces/mapinterface.html" },
    { label: "Java - SortedMap Interface", file: "turorials files/JAVA/interfaces/sortedmapinterface.html" },
    { label: "Java - Set Interface", file: "turorials files/JAVA/interfaces/setinterface.html" },
    { label: "Java - SortedSet Interface", file: "turorials files/JAVA/interfaces/sortedsetinterface.html" },

    // Java Data Structures
    { label: "Java - Data Structures", file: "turorials files/JAVA/datastructure/datastructures.html" },
    { label: "Java - Enumeration", file: "turorials files/JAVA/datastructure/enumeration.html" },

    // Java Collections Algorithms
    { label: "Java - Iterators", file: "turorials files/JAVA/collectionsalgoriths/iterators.html" },
    { label: "Java - Comparators", file: "turorials files/JAVA/collectionsalgoriths/comparators.html" },
    { label: "Java - Comparable Interface in Java", file: "turorials files/JAVA/collectionsalgoriths/comparableinterface.html" },

    // Advanced Java
    { label: "Java - Command-Line Arguments", file: "turorials files/JAVA/advancedjava/commandlinearguments.html" },
    { label: "Java - Lambda Expressions", file: "turorials files/JAVA/advancedjava/lambdaexpressions.html" },
    { label: "Java - Sending Email", file: "turorials files/JAVA/advancedjava/sendingemail.html" },
    { label: "Java - Applet Basics", file: "turorials files/JAVA/advancedjava/appletbasics.html" },
    { label: "Java - Javadoc Comments", file: "turorials files/JAVA/advancedjava/javadoccomments.html" },
    { label: "Java - Autoboxing and Unboxing", file: "turorials files/JAVA/advancedjava/autoboxing.html" },
    { label: "Java - File Mismatch Method", file: "turorials files/JAVA/advancedjava/filemismatch.html" },
    { label: "Java - REPL (JShell)", file: "turorials files/JAVA/advancedjava/repl.html" },
    { label: "Java - Multi-Release Jar Files", file: "turorials files/JAVA/advancedjava/multireleasejar.html" },
    { label: "Java - Private Interface Methods", file: "turorials files/JAVA/advancedjava/privateinterfacemethods.html" },
    { label: "Java - Inner Class Diamond Operator", file: "turorials files/JAVA/advancedjava/innerclassdiamond.html" },
    { label: "Java - Multiresolution Image API", file: "turorials files/JAVA/advancedjava/multiresolutionimage.html" },
    { label: "Java - Collection Factory Methods", file: "turorials files/JAVA/advancedjava/collectionfactorymethods.html" },
    { label: "Java - Module System", file: "turorials files/JAVA/advancedjava/modulesystem.html" },
    { label: "Java - Nashorn JavaScript", file: "turorials files/JAVA/advancedjava/nashornjavascript.html" },
    { label: "Java - Optional Class", file: "turorials files/JAVA/advancedjava/optionalclass.html" },
    { label: "Java - Method References", file: "turorials files/JAVA/advancedjava/methodreferences.html" },
    { label: "Java - Functional Interfaces", file: "turorials files/JAVA/advancedjava/functionalinterfaces.html" },
    { label: "Java - Default Methods", file: "turorials files/JAVA/advancedjava/defaultmethods.html" },
    { label: "Java - Base64 Encode Decode", file: "turorials files/JAVA/advancedjava/base64encodedecode.html" },
    { label: "Java - Switch Expressions", file: "turorials files/JAVA/advancedjava/switchexpressions.html" },
    { label: "Java - Teeing Collectors", file: "turorials files/JAVA/advancedjava/teeingcollectors.html" },
    { label: "Java - Microbenchmark", file: "turorials files/JAVA/advancedjava/microbenchmark.html" },
    { label: "Java - Text Blocks", file: "turorials files/JAVA/advancedjava/textblocks.html" },
    { label: "Java - Dynamic CDS archive", file: "turorials files/JAVA/advancedjava/dynamiccds.html" },
    { label: "Java - Z Garbage Collector (ZGC)", file: "turorials files/JAVA/advancedjava/zgarbagecollector.html" },
    { label: "Java - Null Pointer Exception", file: "turorials files/JAVA/advancedjava/nullpointerexception.html" },
    { label: "Java - Packaging Tools", file: "turorials files/JAVA/advancedjava/packagingtools.html" },
    { label: "Java - Sealed Classes", file: "turorials files/JAVA/advancedjava/sealedclasses.html" },
    { label: "Java - Record Classes", file: "turorials files/JAVA/advancedjava/recordclasses.html" },
    { label: "Java - Hidden Classes", file: "turorials files/JAVA/advancedjava/hiddenclasses.html" },
    { label: "Java - Pattern Matching", file: "turorials files/JAVA/advancedjava/patternmatching.html" },
    { label: "Java - Compact Number Formatting", file: "turorials files/JAVA/advancedjava/compactnumberformatting.html" },
    { label: "Java - Garbage Collection", file: "turorials files/JAVA/advancedjava/garbagecollection.html" },
    { label: "Java - JIT Compiler", file: "turorials files/JAVA/advancedjava/jitcompiler.html" },

    // Java Miscellaneous
    { label: "Java - Recursion", file: "turorials files/JAVA/miscellaneous/recursion.html" },
    { label: "Java - Regular Expressions", file: "turorials files/JAVA/miscellaneous/regularexpressions.html" },
    { label: "Java - Serialization", file: "turorials files/JAVA/miscellaneous/serialization.html" },
    { label: "Java - Strings", file: "turorials files/JAVA/miscellaneous/strings.html" },
    { label: "Java - Process API Improvements", file: "turorials files/JAVA/miscellaneous/processedapiimprovements.html" },
    { label: "Java - Stream API Improvements", file: "turorials files/JAVA/miscellaneous/streamapiimprovements.html" },
    { label: "Java - Enhanced @Deprecated Annotation", file: "turorials files/JAVA/miscellaneous/enhanced@deprecatedannotation.html" },
    { label: "Java - CompletableFuture API Improvements", file: "turorials files/JAVA/miscellaneous/completablefutureapiimprovements.html" },
    { label: "Java - Marker Interface", file: "turorials files/JAVA/miscellaneous/markerinterface.html" },
    { label: "Java - Streams", file: "turorials files/JAVA/miscellaneous/streams.html" },
    { label: "Java - Datetime Api", file: "turorials files/JAVA/miscellaneous/datetimeapi.html" },
    // Java Versions
    { label: "Java 8 - New Features", file: "turorials files/JAVA/miscellaneous/java8newfeatures.html" },
    { label: "Java 9 - New Features", file: "turorials files/JAVA/miscellaneous/java9newfeatures.html" },
    { label: "Java 10 - New Features", file: "turorials files/JAVA/miscellaneous/java10newfeatures.html" },
    { label: "Java 11 - New Features", file: "turorials files/JAVA/miscellaneous/java11newfeatures.html" },
    { label: "Java 12 - New Features", file: "turorials files/JAVA/miscellaneous/java12newfeatures.html" },
    { label: "Java 13 - New Features", file: "turorials files/JAVA/miscellaneous/java13newfeatures.html" },
    { label: "Java 14 - New Features", file: "turorials files/JAVA/miscellaneous/java14newfeatures.html" },
    { label: "Java 15 - New Features", file: "turorials files/JAVA/miscellaneous/java15newfeatures.html" },
    { label: "Java 16 - New Features", file: "turorials files/JAVA/miscellaneous/java16newfeatures.html" },

    // Java APIs & Frameworks
    { label: "JDBC Tutorial", file: "turorials files/JAVA/apiandframeworks/jdbctutorials.html" },
    { label: "SWING Tutorial", file: "turorials files/JAVA/apiandframeworks/swingtutorials.html" },
    { label: "AWT Tutorial", file: "turorials files/JAVA/apiandframeworks/awttoolkit.html" },
    { label: "Servlets Tutorial", file: "turorials files/JAVA/apiandframeworks/servlettutorials.html" },
    { label: "JSP Tutorial", file: "turorials files/JAVA/apiandframeworks/jsptutorials.html" },

    // Java Class References
    { label: "Java - Scanner", file: "turorials files/JAVA/classreferences/scanner.html" },
    { label: "Java - Arrays", file: "turorials files/JAVA/classreferences/arrays.html" },
    { label: "Java - Strings", file: "turorials files/JAVA/classreferences/string.html" },
    { label: "Java - Date", file: "turorials files/JAVA/classreferences/date.html" },
    { label: "Java - ArrayList", file: "turorials files/JAVA/classreferences/arraylist.html" },
    { label: "Java - Vector", file: "turorials files/JAVA/classreferences/vector.html" },
    { label: "Java - Stack", file: "turorials files/JAVA/classreferences/stack.html" },
    { label: "Java - PriorityQueue", file: "turorials files/JAVA/classreferences/priorityqueue.html" },
    { label: "Java - LinkedList", file: "turorials files/JAVA/classreferences/linkedlist.html" },
    { label: "Java - ArrayDeque", file: "turorials files/JAVA/classreferences/arraydeque.html" },
    { label: "Java - HashMap", file: "turorials files/JAVA/classreferences/hashmap.html" },
    { label: "Java - LinkedHashMap", file: "turorials files/JAVA/classreferences/linkedhashmap.html" },
    { label: "Java - WeakHashMap", file: "turorials files/JAVA/classreferences/weakhashmap.html" },
    { label: "Java - EnumMap", file: "turorials files/JAVA/classreferences/enummap.html" },
    { label: "Java - TreeMap", file: "turorials files/JAVA/classreferences/treemap.html" },
    { label: "Java - IdentityHashMap", file: "turorials files/JAVA/classreferences/identityhashmap.html" },
    { label: "Java - HashSet", file: "turorials files/JAVA/classreferences/hashset.html" },
    { label: "Java - EnumSet", file: "turorials files/JAVA/classreferences/enumset.html" },
    { label: "Java - LinkedHashSet", file: "turorials files/JAVA/classreferences/linkedhashset.html" },
    { label: "Java - TreeSet", file: "turorials files/JAVA/classreferences/treeset.html" },
    { label: "Java - BitSet", file: "turorials files/JAVA/classreferences/bitset.html" },
    { label: "Java - Dictionary", file: "turorials files/JAVA/classreferences/dictionary.html" },
    { label: "Java - Hashtable", file: "turorials files/JAVA/classreferences/hashtable.html" },
    { label: "Java - Properties", file: "turorials files/JAVA/classreferences/properties.html" },
    { label: "Java - Collection", file: "turorials files/JAVA/classreferences/collections.html" },
    { label: "Java - Array", file: "turorials files/JAVA/classreferences/array.html" },

    // References & Tools
    { label: "Java - Cheatsheet", file: "turorials files/JAVA/usefulresources/cheatsheet.html" },
    { label: "Java - Questions and Answers", file: "turorials files/JAVA/usefulresources/questionsandanswers.html" },
    { label: "Java 8 - Questions and Answers", file: "turorials files/JAVA/usefulresources/java8questionsandanswers.html" },
    { label: "Java - Quick Guide", file: "turorials files/JAVA/usefulresources/quickguide.html" },
    { label: "Java - Useful Resources", file: "turorials files/JAVA/usefulresources/usefulresources.html" },
    { label: "Java - Discussion", file: "turorials files/JAVA/usefulresources/discuss.html" },
    { label: "Java - Online Compiler", file: "turorials files/JAVA/usefulresources/onlinecompiler.html" },
    { label: "Java - Examples", file: "turorials files/JAVA/usefulresources/examples.html" }
  ]
},

php: {
  title: "PHP",
  links: [
    { label: "PHP - Home", file: "turorials files/PHP/introduction/home.html" },
    { label: "PHP - Roadmap", file: "turorials files/PHP/introduction/roadmap.html" },
    { label: "PHP - Introduction", file: "turorials files/PHP/introduction/introduction.html" },
    { label: "PHP - Installation", file: "turorials files/PHP/introduction/installation.html" },
    { label: "PHP - History", file: "turorials files/PHP/introduction/history.html" },
    { label: "PHP - Features", file: "turorials files/PHP/introduction/features.html" },
    { label: "PHP - Syntax", file: "turorials files/PHP/introduction/syntax.html" },
    { label: "PHP - Hello World", file: "turorials files/PHP/introduction/helloworld.html" },
    { label: "PHP - Comments", file: "turorials files/PHP/introduction/comments.html" },
    { label: "PHP - Variables", file: "turorials files/PHP/introduction/variables.html" },
    { label: "PHP - Echo/Print", file: "turorials files/PHP/introduction/echoandprint.html" },
    { label: "PHP - var_dump", file: "turorials files/PHP/introduction/vardump.html" },
    { label: "PHP - $ and $$ Variables", file: "turorials files/PHP/introduction/$and$$variables.html" },
    { label: "PHP - Constants", file: "turorials files/PHP/introduction/constants.html" },
    { label: "PHP - Magic Constants", file: "turorials files/PHP/introduction/magicconstants.html" },
    { label: "PHP - Data Types", file: "turorials files/PHP/introduction/datatypes.html" },
    { label: "PHP - Type Casting", file: "turorials files/PHP/introduction/typecasting.html" },
    { label: "PHP - Type Juggling", file: "turorials files/PHP/introduction/typejuggling.html" },
    { label: "PHP - Strings", file: "turorials files/PHP/introduction/strings.html" },
    { label: "PHP - Boolean", file: "turorials files/PHP/introduction/boolean.html" },
    { label: "PHP - Integers", file: "turorials files/PHP/introduction/integers.html" },
    { label: "PHP - Files & I/O", file: "turorials files/PHP/introduction/fileandio.html" },
    { label: "PHP - Maths Functions", file: "turorials files/PHP/introduction/mathfunctions.html" },
    { label: "PHP - Heredoc & Nowdoc", file: "turorials files/PHP/introduction/heredocandnowdoc.html" },
    { label: "PHP - Compound Types", file: "turorials files/PHP/introduction/compoundtypes.html" },
    { label: "PHP - File Include", file: "turorials files/PHP/introduction/fileinclude.html" },
    { label: "PHP - Date & Time", file: "turorials files/PHP/introduction/dateandtime.html" },
    { label: "PHP - Scalar Type Declarations", file: "turorials files/PHP/introduction/scalartypedeclaration.html" },
    { label: "PHP - Return Type Declarations", file: "turorials files/PHP/introduction/returntypedeclarations.html" },
    { label: "PHP - Operators", file: "turorials files/PHP/introduction/operators.html" },
    { label: "PHP - Arithmetic Operators", file: "turorials files/PHP/introduction/arithmeticoperator.html" },
    { label: "PHP - Comparison Operators", file: "turorials files/PHP/introduction/comparisonoperator.html" },
    { label: "PHP - Logical Operators", file: "turorials files/PHP/introduction/logicaloperators.html" },
    { label: "PHP - Assignment Operators", file: "turorials files/PHP/introduction/assignmentoperators.html" },
    { label: "PHP - String Operators", file: "turorials files/PHP/introduction/stringoperators.html" },
    { label: "PHP - Array Operators", file: "turorials files/PHP/introduction/arrayoperators.html" },
    { label: "PHP - Conditional Operators", file: "turorials files/PHP/introduction/conditionaloperators.html" },
    { label: "PHP - Spread Operator", file: "turorials files/PHP/introduction/spreadoperator.html" },
    { label: "PHP - Null Coalescing Operator", file: "turorials files/PHP/introduction/nullcoalescingoperator.html" },
    { label: "PHP - Spaceship Operator", file: "turorials files/PHP/introduction/spaceshipoperator.html" },


    { label: "Control Statements", isTitle: true },

    { label: "PHP - Decision Making", file: "turorials files/PHP/controlstatements/decisionmaking.html" },
    { label: "PHP - If…Else Statement", file: "turorials files/PHP/controlstatements/ifelsestatement.html" },
    { label: "PHP - Switch Statement", file: "turorials files/PHP/controlstatements/switchstatement.html" },
    { label: "PHP - Loop Types", file: "turorials files/PHP/controlstatements/looptypes.html" },
    { label: "PHP - For Loop", file: "turorials files/PHP/controlstatements/forloop.html" },
    { label: "PHP - Foreach Loop", file: "turorials files/PHP/controlstatements/foreachloop.html" },
    { label: "PHP - While Loop", file: "turorials files/PHP/controlstatements/whileloop.html" },
    { label: "PHP - Do…While Loop", file: "turorials files/PHP/controlstatements/dowhileloop.html" },
    { label: "PHP - Break Statement", file: "turorials files/PHP/controlstatements/breakstatement.html" },
    { label: "PHP - Continue Statement", file: "turorials files/PHP/controlstatements/continuestatement.html" },


    { label: "Arrays", isTitle: true},

    { label: "PHP - Arrays", file: "turorials files/PHP/arrays/arrays.html" },
    { label: "PHP - Indexed Array", file: "turorials files/PHP/arrays/indexedarray.html" },
    { label: "PHP - Associative Array", file: "turorials files/PHP/arrays/associativearray.html" },
    { label: "PHP - Multidimensional Array", file: "turorials files/PHP/arrays/multidimensionalarray.html" },
    { label: "PHP - Array Functions", file: "turorials files/PHP/arrays/arrayfunctions.html" },
    { label: "PHP - Constant Arrays", file: "turorials files/PHP/arrays/constantarrays.html" },


    { label: "Functions", isTitle: true },

    { label: "PHP - Function Parameters", file: "turorials files/PHP/functions/functionparameters.html" },
    { label: "PHP - Call by value", file: "turorials files/PHP/functions/callbyvalue.html" },
    { label: "PHP - Call by Reference", file: "turorials files/PHP/functions/callbyreference.html" },
    { label: "PHP - Default Arguments", file: "turorials files/PHP/functions/defaultarguments.html" },
    { label: "PHP - Named Arguments", file: "turorials files/PHP/functions/namedarguments.html" },
    { label: "PHP - Variable Arguments", file: "turorials files/PHP/functions/variablearguments.html" },
    { label: "PHP - Returning Values", file: "turorials files/PHP/functions/returningvalues.html" },
    { label: "PHP - Passing Functions", file: "turorials files/PHP/functions/passingfunctions.html" },
    { label: "PHP - Recursive Functions", file: "turorials files/PHP/functions/recursivefunctions.html" },
    { label: "PHP - Type Hints", file: "turorials files/PHP/functions/typehints.html" },
    { label: "PHP - Variable Scope", file: "turorials files/PHP/functions/variablescope.html" },
    { label: "PHP - Strict Typing", file: "turorials files/PHP/functions/stricttyping.html" },
    { label: "PHP - Anonymous Functions", file: "turorials files/PHP/functions/anonymousfunctions.html" },
    { label: "PHP - Arrow Functions", file: "turorials files/PHP/functions/arrowfunctions.html" },
    { label: "PHP - Variable Functions", file: "turorials files/PHP/functions/variablefunctions.html" },
    { label: "PHP - Local Variables", file: "turorials files/PHP/functions/localvariables.html" },
    { label: "PHP - Global Variables", file: "turorials files/PHP/functions/globalvariables.html" },

    // Superglobals
    { label: "Superglobals", isTitle: true },

    { label: "PHP - Superglobals", file: "turorials files/PHP/superglobals/superglobals.html" },
    { label: "PHP - $GLOBALS", file: "turorials files/PHP/superglobals/$globals.html" },
    { label: "PHP - $_SERVER", file: "turorials files/PHP/superglobals/$server.html" },
    { label: "PHP - $_REQUEST", file: "turorials files/PHP/superglobals/$request.html" },
    { label: "PHP - $_POST", file: "turorials files/PHP/superglobals/$post.html" },
    { label: "PHP - $_GET", file: "turorials files/PHP/superglobals/$get.html" },
    { label: "PHP - $_FILES", file: "turorials files/PHP/superglobals/$files.html" },
    { label: "PHP - $_ENV", file: "turorials files/PHP/superglobals/$env.html" },
    { label: "PHP - $_COOKIE", file: "turorials files/PHP/superglobals/$cookie.html" },
    { label: "PHP - $_SESSION", file: "turorials files/PHP/superglobals/$session.html" },

    // File Handling
    { label: "PHP File Handling", isTitle: true },

    { label: "PHP - File Handling", file: "turorials files/PHP/filehandeling/filehandling.html" },
    { label: "PHP - Open File", file: "turorials files/PHP/filehandeling/openfile.html" },
    { label: "PHP - Read File", file: "turorials files/PHP/filehandeling/readfile.html" },
    { label: "PHP - Write File", file: "turorials files/PHP/filehandeling/writefile.html" },
    { label: "PHP - File Existence", file: "turorials files/PHP/filehandeling/fileexistence.html" },
    { label: "PHP - Download File", file: "turorials files/PHP/filehandeling/downloadfile.html" },
    { label: "PHP - Copy File", file: "turorials files/PHP/filehandeling/copyfile.html" },
    { label: "PHP - Append File", file: "turorials files/PHP/filehandeling/appendfile.html" },
    { label: "PHP - Delete File", file: "turorials files/PHP/filehandeling/deletefile.html" },
    { label: "PHP - Handle CSV File", file: "turorials files/PHP/filehandeling/handlecsvfile.html" },
    { label: "PHP - File Permissions", file: "turorials files/PHP/filehandeling/filepermissions.html" },
    { label: "PHP - Create Directory", file: "turorials files/PHP/filehandeling/createdirectory.html" },
    { label: "PHP - Listing Files", file: "turorials files/PHP/filehandeling/listingfiles.html" },

    // Object Oriented Programming
    { label: "Object Oriented Programming", isTitle: true },

    { label: "PHP - Object Oriented Programming", file: "turorials files/PHP/objectoriented/objectorientedprogramming.html" },
    { label: "PHP - Classes and Objects", file: "turorials files/PHP/objectoriented/classesandobjects.html" },
    { label: "PHP - Constructor and Destructor", file: "turorials files/PHP/objectoriented/constructoranddestructor.html" },
    { label: "PHP - Access Modifiers", file: "turorials files/PHP/objectoriented/accessmodifiers.html" },
    { label: "PHP - Inheritance", file: "turorials files/PHP/objectoriented/inheritance.html" },
    { label: "PHP - Class Constants", file: "turorials files/PHP/objectoriented/classconstants.html" },
    { label: "PHP - Abstract Classes", file: "turorials files/PHP/objectoriented/abstractclasses.html" },
    { label: "PHP - Interfaces", file: "turorials files/PHP/objectoriented/interfaces.html" },
    { label: "PHP - Traits", file: "turorials files/PHP/objectoriented/traits.html" },
    { label: "PHP - Static Methods", file: "turorials files/PHP/objectoriented/staticmethods.html" },
    { label: "PHP - Static Properties", file: "turorials files/PHP/objectoriented/staticproperties.html" },
    { label: "PHP - Namespaces", file: "turorials files/PHP/objectoriented/namespaces.html" },
    { label: "PHP - Object Iteration", file: "turorials files/PHP/objectoriented/objectiteration.html" },
    { label: "PHP - Encapsulation", file: "turorials files/PHP/objectoriented/encapsulation.html" },
    { label: "PHP - Final Keyword", file: "turorials files/PHP/objectoriented/finalkeyword.html" },
    { label: "PHP - Overloading", file: "turorials files/PHP/objectoriented/overloading.html" },
    { label: "PHP - Cloning Objects", file: "turorials files/PHP/objectoriented/cloningobjects.html" },
    { label: "PHP - Anonymous Classes", file: "turorials files/PHP/objectoriented/anonymousclasses.html" },

    // Web Development
    { label: "PHP Web Development", isTitle: true },

    { label: "PHP - Web Concepts", file: "turorials files/PHP/webdevlopment/webconcepts.html" },
    { label: "PHP - Form Handling", file: "turorials files/PHP/webdevlopment/formhandling.html" },
    { label: "PHP - Form Validation", file: "turorials files/PHP/webdevlopment/formvalidation.html" },
    { label: "PHP - Form Email/URL", file: "turorials files/PHP/webdevlopment/formemailurl.html" },
    { label: "PHP - Complete Form", file: "turorials files/PHP/webdevlopment/completeform.html" },
    { label: "PHP - File Inclusion", file: "turorials files/PHP/webdevlopment/fileinclusion.html" },
    { label: "PHP - GET & POST", file: "turorials files/PHP/webdevlopment/getandpost.html" },
    { label: "PHP - File Uploading", file: "turorials files/PHP/webdevlopment/fileuploading.html" },
    { label: "PHP - Cookies", file: "turorials files/PHP/webdevlopment/cookies.html" },
    { label: "PHP - Sessions", file: "turorials files/PHP/webdevlopment/sessions.html" },
    { label: "PHP - Session Options", file: "turorials files/PHP/webdevlopment/sessionoptions.html" },
    { label: "PHP - Sending Emails", file: "turorials files/PHP/webdevlopment/sendingemails.html" },
    { label: "PHP - Sanitize Input", file: "turorials files/PHP/webdevlopment/sanitizeinput.html" },
    { label: "PHP - Post-Redirect-Get (PRG)", file: "turorials files/PHP/webdevlopment/postredirectget.html" },
    { label: "PHP - Flash Messages", file: "turorials files/PHP/webdevlopment/flashmessages.html" },

    // AJAX
    { label: "PHP AJAX", isTitle: true },

    { label: "PHP - AJAX Introduction", file: "turorials files/PHP/ajax/introduction.html" },
    { label: "PHP - AJAX Search", file: "turorials files/PHP/ajax/search.html" },
    { label: "PHP - AJAX XML Parser", file: "turorials files/PHP/ajax/xmlparser.html" },
    { label: "PHP - AJAX Auto Complete Search", file: "turorials files/PHP/ajax/autocompletesearch.html" },
    { label: "PHP - AJAX RSS Feed Example", file: "turorials files/PHP/ajax/rssfeedexample.html" },

    // XML
    { label: "PHP XML", isTitle: true },

    { label: "PHP - XML Introduction", file: "turorials files/PHP/xml/introduction.html" },
    { label: "PHP - Simple XML Parser", file: "turorials files/PHP/xml/simplexmlparser.html" },
    { label: "PHP - SAX Parser Example", file: "turorials files/PHP/xml/saxparserexample.html" },
    { label: "PHP - DOM Parser Example", file: "turorials files/PHP/xml/domparserexample.html" },

    // Login Examples
    { label: "PHP Login Example", isTitle: true },
    { label: "PHP - Login Example", file: "turorials files/PHP/loginexample/loginexample.html" },
    { label: "PHP - Facebook Login", file: "turorials files/PHP/loginexample/facebooklogin.html" },
    { label: "PHP - Paypal Integration", file: "turorials files/PHP/loginexample/paypalintegration.html" },
    { label: "PHP - MySQL Login", file: "turorials files/PHP/loginexample/mysqllogin.html" },

    // Advanced
    { label: "PHP Advanced", isTitle: true },

    { label: "PHP - MySQL", file: "turorials files/PHP/advanced/mysql.html" },
    { label: "PHP.INI File Configuration", file: "turorials files/PHP/advanced/fileconfiguration.html" },
    { label: "PHP - Array Destructuring", file: "turorials files/PHP/advanced/arraydestructuring.html" },
    { label: "PHP - Coding Standard", file: "turorials files/PHP/advanced/codingstandard.html" },
    { label: "PHP - Regular Expression", file: "turorials files/PHP/advanced/regularexpressions.html" },
    { label: "PHP - Error Handling", file: "turorials files/PHP/advanced/errorhandling.html" },
    { label: "PHP - Try…Catch", file: "turorials files/PHP/advanced/trycatch.html" },
    { label: "PHP - Bugs Debugging", file: "turorials files/PHP/advanced/bugsdebugging.html" },
    { label: "PHP - For C Developers", file: "turorials files/PHP/advanced/forcdevelopers.html" },
    { label: "PHP - For PERL Developers", file: "turorials files/PHP/advanced/forperldevelopers.html" },
    { label: "PHP - Frameworks", file: "turorials files/PHP/advanced/frameworks.html" },
    { label: "PHP - Core PHP vs Frame Works", file: "turorials files/PHP/advanced/corephpvsframeworks.html" },
    { label: "PHP - Design Patterns", file: "turorials files/PHP/advanced/designpatterns.html" },
    { label: "PHP - Filters", file: "turorials files/PHP/advanced/filters.html" },
    { label: "PHP - JSON", file: "turorials files/PHP/advanced/json.html" },
    { label: "PHP - Exceptions", file: "turorials files/PHP/advanced/exceptions.html" },
    { label: "PHP - Special Types", file: "turorials files/PHP/advanced/specialtypes.html" },
    { label: "PHP - Hashing", file: "turorials files/PHP/advanced/hashing.html" },
    { label: "PHP - Encryption", file: "turorials files/PHP/advanced/encryption.html" },
    { label: "PHP - is_null() Function", file: "turorials files/PHP/advanced/isnullfunction.html" },
    { label: "PHP - System Calls", file: "turorials files/PHP/advanced/systemcalls.html" },
    { label: "PHP - HTTP Authentication", file: "turorials files/PHP/advanced/httpauthentication.html" },
    { label: "PHP - Swapping Variables", file: "turorials files/PHP/advanced/swappingvariables.html" },
    { label: "PHP - Closure::call()", file: "turorials files/PHP/advanced/closurecall.html" },
    { label: "PHP - Filtered unserialize()", file: "turorials files/PHP/advanced/filteredunserialize.html" },
    { label: "PHP - IntlChar", file: "turorials files/PHP/advanced/intlchar.html" },
    { label: "PHP - CSPRNG", file: "turorials files/PHP/advanced/csprng.html" },
    { label: "PHP - Expectations", file: "turorials files/PHP/advanced/expectations.html" },
    { label: "PHP - Use Statement", file: "turorials files/PHP/advanced/usestatement.html" },
    { label: "PHP - Integer Division", file: "turorials files/PHP/advanced/integerdivision.html" },
    { label: "PHP - Deprecated Features", file: "turorials files/PHP/advanced/deprecated.html" },
    { label: "PHP - Removed Extensions & SAPIs", file: "turorials files/PHP/advanced/removedextensions.html" },
    { label: "PHP - PEAR", file: "turorials files/PHP/advanced/pear.html" },
    { label: "PHP - CSRF", file: "turorials files/PHP/advanced/csrf.html" },
    { label: "PHP - FastCGI Process", file: "turorials files/PHP/advanced/fastcgi.html" },
    { label: "PHP - PDO Extension", file: "turorials files/PHP/advanced/pdo.html" },
    { label: "PHP - Built-In Functions", file: "turorials files/PHP/advanced/builtinfunctions.html" },

    // Resources
    { label: "PHP Useful Resources", file: "turorials files/PHP/usefulresources/usefulresources.html" },
    { label: "PHP - Cheatsheet", file: "turorials files/PHP/usefulresources/cheatsheet.html" },
    { label: "PHP - Questions & Answers", file: "turorials files/PHP/usefulresources/questionsandanswers.html" },
    { label: "PHP - Quick Guide", file: "turorials files/PHP/usefulresources/quickguide.html" },
    { label: "PHP - Discussion", file: "turorials files/PHP/usefulresources/discussion.html" },
    { label: "PHP - Online Compiler", file: "turorials files/PHP/usefulresources/onlinecompiler.html" }
  ]
},

  powerbi: {
  title: "PowerBI",
  links: [
    { label: "Power BI - Home", file: "turorials files/POWERBI/introduction/home.html" },
    { label: "Power BI - Introduction", file: "turorials files/POWERBI/introduction/introduction.html" },
    { label: "Power BI - Installation Steps", file: "turorials files/POWERBI/introduction/installationsteps.html" },
    { label: "Power BI - Architecture", file: "turorials files/POWERBI/introduction/architecture.html" },

    { label: "Power BI Desktop", file: "turorials files/POWERBI/desktop/desktop.html" },
    { label: "Power BI - Desktop Window", file: "turorials files/POWERBI/desktop/desktopwindow.html" },

    { label: "Power BI Service", isTitle: true },
    { label: "Power BI - Window Supported Browsers", file: "turorials files/POWERBI/service/windowsupportedbrowsers.html" },
    { label: "Power BI - Generating Reports", file: "turorials files/POWERBI/service/generatingreports.html" },

    { label: "Power BI Desktop Service", isTitle: true },
    { label: "Power BI - Desktop vs Service", file: "turorials files/POWERBI/desktopservice/desktopvsservice.html" },
    { label: "Power BI - Supported Data Sources", file: "turorials files/POWERBI/desktopservice/supporteddatasources.html" },
    { label: "Power BI - Comparison Tools", file: "turorials files/POWERBI/desktopservice/comparisontools.html" },

    // Power Query Editor
    { label: "Power Query Editor", isTitle: true },
    { label: "Power Query Editor - Introduction", file: "turorials files/POWERBI/queryeditor/introduction.html" },
    { label: "Power Query Editor - Data Discrepancy", file: "turorials files/POWERBI/queryeditor/datadiscrepancy.html" },
    { label: "Power Query Editor - Merge Queries (Part 1)", file: "turorials files/POWERBI/queryeditor/mergequeriespart1.html" },
    { label: "Power Query Editor - Merge Queries (Part 2)", file: "turorials files/POWERBI/queryeditor/mergequeriespart2.html" },
    { label: "Power BI - Develop Star Schema", file: "turorials files/POWERBI/queryeditor/developstarschema.html" },

    // Data Modeling
    { label: "Data Modeling Concepts", isTitle: true },

    { label: "Power BI - Data Modeling", file: "turorials files/POWERBI/datamodelingconcepts/datamodeling.html" },
    { label: "Power BI - Manage Relationships", file: "turorials files/POWERBI/datamodelingconcepts/managerelationship.html" },
    { label: "Power BI - Cardinality", file: "turorials files/POWERBI/datamodelingconcepts/cardinality.html" },
    { label: "Power BI - Dashboard Options", file: "turorials files/POWERBI/datamodelingconcepts/dashboardoptions.html" },

    // Report Visualizations
    { label: "Power BI Report Visualizations", isTitle: true },

    { label: "Power BI - Visualization Options", file: "turorials files/POWERBI/reportvisualization/visualizationoption.html" },
    { label: "Power BI - Visualization Charts", file: "turorials files/POWERBI/reportvisualization/visualizationcharts.html" },
    { label: "Power BI - Stacked Bar Chart", file: "turorials files/POWERBI/reportvisualization/stackedbarchart.html" },
    { label: "Power BI - Stacked Column Chart", file: "turorials files/POWERBI/reportvisualization/stackedcolumnchart.html" },
    { label: "Power BI - Clustered Chart", file: "turorials files/POWERBI/reportvisualization/clusteredchart.html" },
    { label: "Power BI - 100% Stacked Chart", file: "turorials files/POWERBI/reportvisualization/stackedchart.html" },
    { label: "Power BI - Area Chart and Stacked Area Chart", file: "turorials files/POWERBI/reportvisualization/areachartandstackedareachart.html" },
    { label: "Power BI - Line and Stacked Column Chart", file: "turorials files/POWERBI/reportvisualization/lineandstackedcoloumchart.html" },
    { label: "Power BI - Line and Clustered Column Chart", file: "turorials files/POWERBI/reportvisualization/lineandclustercoloumchart.html" },
    { label: "Power BI - Ribbon Chart", file: "turorials files/POWERBI/reportvisualization/ribbonchart.html" },
    { label: "Power BI - Table and Matrix Visuals", file: "turorials files/POWERBI/reportvisualization/tableandmatrixvisuals.html" },

    // Map Visualizations
    { label: "Power BI Map Visualizations", isTitle: true },
    { label: "Power BI - Creating Map Visualizations", file: "turorials files/POWERBI/mapvisualization/creatingmapvisualizations.html" },
    { label: "Power BI - ArcGIS Map", file: "turorials files/POWERBI/mapvisualization/arcgismap.html" },

    // Miscellaneous Charts
    { label: "Power BI Miscellaneous", isTitle: true },

    { label: "Power BI - Waterfall Charts", file: "turorials files/POWERBI/miscellaneous/waterfallcharts.html" },
    { label: "Funnel Charts and Radial Gauge Chart", file: "turorials files/POWERBI/miscellaneous/funnelchartsandradialgaugechart.html" },
    { label: "Power BI - Scatter Chart", file: "turorials files/POWERBI/miscellaneous/scatterchart.html" },
    { label: "Power BI - Pie Chart and Donut Chart", file: "turorials files/POWERBI/miscellaneous/piechartanddountchart.html" },
    { label: "Power BI - Card and Slicer Visualization", file: "turorials files/POWERBI/miscellaneous/cardandslicervisualization.html" },
    { label: "Power BI - KPI Visual", file: "turorials files/POWERBI/miscellaneous/kpivisual.html" },
    { label: "Power BI - Smart Narrative Visual", file: "turorials files/POWERBI/miscellaneous/smartandnarrativevisual.html" },
    { label: "Power BI - Decomposition Tree", file: "turorials files/POWERBI/miscellaneous/decompositiontree.html" },
    { label: "Power BI - Paginated Report", file: "turorials files/POWERBI/miscellaneous/paginatedreport.html" },
    { label: "Power BI - Python Script & R Script", file: "turorials files/POWERBI/miscellaneous/pythonandrscript.html" },
    { label: "Power BI - Multi-row Card", file: "turorials files/POWERBI/miscellaneous/multirowcard.html" },
    { label: "Power BI - Power Apps & Power Automate", file: "turorials files/POWERBI/miscellaneous/powerappspowerautomate.html" },
    { label: "Power BI - Excel Integration", file: "turorials files/POWERBI/miscellaneous/excelintegration.html" },

    // Dashboards
    { label: "Power BI Dashboard", isTitle: true },
    { label: "Power BI - Sharing Dashboards", file: "turorials files/POWERBI/dashboard/sharingdashboard.html" },

    //Sales Production Dashboard
    { label: "Power BI Sales Production Dashboard", isTitle: true },
    { label: "Power BI - HR Analytics Dashboard", file: "turorials files/POWERBI/salesprodutiondashboard/hranalyticsdashboard.html" },
    { label: "Power BI - Customer Analytics Dashboard", file: "turorials files/POWERBI/salesprodutiondashboard/customeranalyticsdashboard.html" },
    { label: "Power BI - DAX Basics", file: "turorials files/POWERBI/salesprodutiondashboard/daxbasics.html" },
    { label: "Power BI - Administration Role", file: "turorials files/POWERBI/salesprodutiondashboard/administrationrole.html" },
    { label: "Power BI - DAX Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxfunctions.html" },
    { label: "Power BI - DAX Text Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxtextfunctions.html" },
    { label: "Power BI - DAX Date Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxdatefunctions.html" },
    { label: "Power BI - DAX Logical Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxlogicalfunctions.html" },
    { label: "Power BI - DAX Counting Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxcountingfunctions.html" },
    { label: "Power BI - Depreciation Functions", file: "turorials files/POWERBI/salesprodutiondashboard/depreciationfunctions.html" },
    { label: "Power BI - DAX Information Functions", file: "turorials files/POWERBI/salesprodutiondashboard/daxinformationfunctions.html" },

  ]
},

powershell: {
  title: "PowerShell",
  links: [
    { label: "PowerShell - Home", file: "turorials files/POWERSHELL/introduction/home.html" },
    { label: "PowerShell - Overview", file: "turorials files/POWERSHELL/introduction/overview.html" },
    { label: "PowerShell - Environment Setup", file: "turorials files/POWERSHELL/introduction/environmentsetup.html" },
    { label: "PowerShell - Cmdlets", file: "turorials files/POWERSHELL/introduction/cmdlets.html" },
    { label: "PowerShell - Files and Folders", file: "turorials files/POWERSHELL/introduction/fileandfolder.html" },
    { label: "PowerShell - Dates and Timers", file: "turorials files/POWERSHELL/introduction/dateandtimers.html" },
    { label: "PowerShell - Files I/O", file: "turorials files/POWERSHELL/introduction/fileiooperations.html" },
    { label: "PowerShell - Advanced Cmdlets", file: "turorials files/POWERSHELL/introduction/advancedcmdlets.html" },
    { label: "PowerShell - Scripting", file: "turorials files/POWERSHELL/introduction/scripting.html" },
    { label: "PowerShell - Special Variables", file: "turorials files/POWERSHELL/introduction/specialvariables.html" },
    { label: "PowerShell - Operators", file: "turorials files/POWERSHELL/introduction/operators.html" },
    { label: "PowerShell - Looping", file: "turorials files/POWERSHELL/introduction/looping.html" },
    { label: "PowerShell - Conditions", file: "turorials files/POWERSHELL/introduction/conditions.html" },
    { label: "PowerShell - Array", file: "turorials files/POWERSHELL/introduction/array.html" },
    { label: "PowerShell - Hashtables", file: "turorials files/POWERSHELL/introduction/hashtables.html" },
    { label: "PowerShell - Regex", file: "turorials files/POWERSHELL/introduction/regex.html" },
    { label: "PowerShell - Backtick", file: "turorials files/POWERSHELL/introduction/backtick.html" },
    { label: "PowerShell - Brackets", file: "turorials files/POWERSHELL/introduction/brackets.html" },
    { label: "PowerShell - Alias", file: "turorials files/POWERSHELL/introduction/alias.html" },

    // Useful Resources
    { label: "PowerShell - Quick Guide", file: "turorials files/POWERSHELL/usefulresources/quickguide.html" },
    { label: "PowerShell - Useful Resources", file: "turorials files/POWERSHELL/usefulresources/usefulresources.html" },
    { label: "PowerShell - Discussion", file: "turorials files/POWERSHELL/usefulresources/discuss.html" },
    ],
  },
};

// === DOM SELECTION ===
const navItems = document.querySelectorAll(".nav-item");
const sidebarTitle = document.getElementById("sidebarTitle");
const sidebarLinks = document.getElementById("sidebarLinks");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");

// === BUILD SIDEBAR ===
function buildSidebar(subjectKey, autoLoadFirst = true) {
  const subject = SUBJECTS[subjectKey];
  sidebarTitle.textContent = subject.title;
  sidebarLinks.innerHTML = "";

  subject.links.forEach((link, i) => {
    if (link.isTitle) {
      // Create a non-clickable section header
      const titleDiv = document.createElement("div");
      titleDiv.textContent = link.label;
      titleDiv.classList.add("sidebar-section-title");
      sidebarLinks.appendChild(titleDiv);
    } else {
      // Create normal clickable link
      const a = document.createElement("a");
      a.classList.add("side-link");
      if (i === 0) a.classList.add("active");
      a.dataset.file = link.file;
      a.textContent = link.label;
      sidebarLinks.appendChild(a);
    }
  });

  // Add click listeners for clickable links
  sidebarLinks.querySelectorAll(".side-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      setActive(sidebarLinks, link, "side-link");
      loadContent(link.getAttribute("data-file"));
      if (window.innerWidth <= 768) sidebar.classList.add("hidden");
    });
  });

  // Auto-load first clickable item
  if (autoLoadFirst) {
    const firstLink = subject.links.find((l) => !l.isTitle);
    if (firstLink) loadContent(firstLink.file);
  }
}

// === LOAD CONTENT ===
function loadContent(file) {
  fetch(file)
    .then((res) => {
      if (!res.ok) throw new Error(`Cannot load ${file}`);
      return res.text();
    })
    .then((html) => {
      content.innerHTML = html;
      content.scrollTop = 0;
    })
    .catch((err) => {
      content.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}

// === SET ACTIVE LINK ===
function setActive(container, el, className) {
  container
    .querySelectorAll(`.${className}`)
    .forEach((a) => a.classList.remove("active"));
  el.classList.add("active");
}

// === NAV CLICK HANDLERS ===
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    setActive(item.parentElement, item, "nav-item");
    const subjectKey = item.getAttribute("data-topic");
    buildSidebar(subjectKey, true);
    if (window.innerWidth <= 768) sidebar.classList.remove("hidden");
  });
});





//   search button
const searchToggleBtn = document.getElementById("searchToggleBtn");
const navSearch = document.getElementById("navSearch");

searchToggleBtn.addEventListener("click", () => {
  if (navSearch.style.display === "none") {
    navSearch.style.display = "inline-block";
    navSearch.focus();
  } else {
    navSearch.style.display = "none";
    navSearch.value = "";
    filterNavItems("");
  }
});

navSearch.addEventListener("input", () => {
  filterNavItems(navSearch.value);
});

function filterNavItems(query) {
  const lowerQuery = query.toLowerCase();
  document.querySelectorAll(".nav-item").forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(lowerQuery) ? "" : "none";
  });
}



// --- Sidebar Toggle Button Functionality ---
sidebarToggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("hidden");
});

// Optional: Close sidebar when user clicks outside (on mobile)
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(e.target) &&
    !sidebarToggleBtn.contains(e.target)
  ) {
    sidebar.classList.add("hidden");
  }
});















//   mouse scroll
// Enable mouse drag scrolling for nav-links (desktop swipe-like effect)
const navLinks = document.getElementById("navLinks");

let isDownNav = false;
let startXNav;
let scrollLeftNav;

navLinks.addEventListener("mousedown", (e) => {
  isDownNav = true;
  navLinks.classList.add("dragging");
  startXNav = e.pageX - navLinks.offsetLeft;
  scrollLeftNav = navLinks.scrollLeft;
});

navLinks.addEventListener("mouseleave", () => {
  isDownNav = false;
});

navLinks.addEventListener("mouseup", () => {
  isDownNav = false;
});

navLinks.addEventListener("mousemove", (e) => {
  if (!isDownNav) return;
  e.preventDefault();
  const x = e.pageX - navLinks.offsetLeft;
  const walk = (x - startXNav) * 2; // Adjust multiplier for speed
  navLinks.scrollLeft = scrollLeftNav - walk;
});

function toggleDarkMode() {
  const body = document.body;
  const icon = document.getElementById("dark-icon");
  body.classList.toggle("dark-mode");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
}