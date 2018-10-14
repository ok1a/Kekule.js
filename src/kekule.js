require('./lan/classes')
require('./lan/xmlJsons')
require('./lan/serializations')

var Kekule = {}
Kekule = require('./core/kekule.root')(Kekule)
Kekule = require('./localization/kekule.localizations')(Kekule)
Kekule = require('./localization/en/kekule.localize.general.en')(Kekule)
Kekule = require('./localization/en/kekule.localize.widget.en')(Kekule)
Kekule = require('./localization/en/kekule.localize.objDefines.en')(Kekule)
Kekule = require('./core/kekule.common')(Kekule)
Kekule = require('./core/kekule.exceptions')(Kekule)
Kekule = require('./utils/kekule.utils')(Kekule)
Kekule = require('./data/kekule.dataUtils')(Kekule)
Kekule = require('./core/kekule.configs')(Kekule)
Kekule = require('./core/kekule.elements')(Kekule)
Kekule = require('./core/kekule.electrons')(Kekule)
Kekule = require('./core/kekule.valences')(Kekule)
Kekule = require('./core/kekule.structures')(Kekule)
Kekule = require('./core/kekule.structureBuilder')(Kekule)
Kekule = require('./core/kekule.reactions')(Kekule)
Kekule = require('./core/kekule.chemUtils')(Kekule)
Kekule = require('./chemdoc/kekule.glyph.base')(Kekule)
Kekule = require('./chemdoc/kekule.glyph.pathGlyphs')(Kekule)
Kekule = require('./chemdoc/kekule.glyph.lines')(Kekule)
Kekule = require('./chemdoc/kekule.glyph.chemGlyphs')(Kekule)
Kekule = require('./chemdoc/kekule.contentBlocks')(Kekule)
Kekule = require('./chemdoc/kekule.attachedMarkers')(Kekule)
Kekule = require('./chemdoc/kekule.commonChemMarkers')(Kekule)
Kekule = require('./xbrowsers/kekule.x')(Kekule)
Kekule = require('./html/kekule.nativeServices')(Kekule)
Kekule = require('./html/kekule.predefinedResLoaders')(Kekule)
Kekule = require('./utils/kekule.domUtils')(Kekule)
Kekule = require('./utils/kekule.domHelper')(Kekule)
Kekule = require('./utils/kekule.textHelper')(Kekule)
Kekule = require('./io/kekule.io')(Kekule)
Kekule = require('./io/cml/kekule.io.cml')(Kekule)
Kekule = require('./io/mdl/kekule.io.mdlBase')(Kekule)
Kekule = require('./io/mdl/kekule.io.mdl2000')(Kekule)
Kekule = require('./io/mdl/kekule.io.mdl3000')(Kekule)
Kekule = require('./io/mdl/kekule.io.mdlIO')(Kekule)
Kekule = require('./io/smiles/kekule.io.smiles')(Kekule)
Kekule = require('./io/native/kekule.io.native')(Kekule)
Kekule = require('./render/kekule.render.extensions')(Kekule)
Kekule = require('./render/kekule.render.base')(Kekule)
Kekule = require('./render/kekule.render.renderColorData')(Kekule)
Kekule = require('./render/kekule.render.utils')(Kekule)
Kekule = require('./render/kekule.render.configs')(Kekule)
Kekule = require('./render/kekule.render.baseTextRender')(Kekule)
Kekule = require('./render/kekule.render.boundInfoRecorder')(Kekule)
Kekule = require('./render/2d/kekule.render.renderer2D')(Kekule)
Kekule = require('./render/2d/kekule.render.glyphRender2D')(Kekule)
Kekule = require('./render/2d/kekule.render.canvasRenderer')(Kekule)
Kekule = require('./render/2d/kekule.render.raphaelRenderer')(Kekule)
Kekule = require('./render/3d/kekule.render.renderer3D')(Kekule)
Kekule = require('./render/3d/kekule.render.threeRenderer')(Kekule)
Kekule = require('./render/kekule.render.painter')(Kekule)
Kekule = require('./widgets/operation/kekule.operations')(Kekule)
Kekule = require('./widgets/operation/kekule.actions')(Kekule)
Kekule = require('./widgets/kekule.widget.bindings')(Kekule)
Kekule = require('./widgets/kekule.widget.base')(Kekule)
Kekule = require('./widgets/kekule.widget.sys')(Kekule)
Kekule = require('./widgets/kekule.widget.clipboards')(Kekule)
Kekule = require('./widgets/kekule.widget.helpers')(Kekule)
Kekule = require('./widgets/kekule.widget.styleResources')(Kekule)
Kekule = require('./widgets/kekule.widget.autoLaunchers')(Kekule)
Kekule = require('./widgets/transitions/kekule.widget.transitions')(Kekule)
Kekule = require('./widgets/transitions/kekule.widget.transMgr')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.resizers')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.movers')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.images')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.containers')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.menus')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.buttons')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.formControls')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.nestedContainers')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.treeViews')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.dialogs')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.msgPanels')(Kekule)
Kekule = require('./widgets/commonCtrls/kekule.widget.tabViews')(Kekule)
Kekule = require('./widgets/advCtrls/kekule.widget.valueListEditors')(Kekule)
Kekule = require('./widgets/advCtrls/kekule.widget.colorPickers')(Kekule)
Kekule = require('./widgets/advCtrls/kekule.widget.textEditors')(Kekule)
Kekule = require('./widgets/advCtrls/kekule.widget.widgetGrids')(Kekule)
Kekule = require('./widgets/advCtrls/objInspector/kekule.widget.objInspectors')(Kekule)
Kekule = require('./widgets/advCtrls/objInspector/kekule.widget.objInspector.propEditors')(Kekule)
Kekule = require('./widgets/advCtrls/objInspector/kekule.widget.objInspector.operations')(Kekule)
Kekule = require('./widgets/advCtrls/kekule.widget.configurators')(Kekule)
Kekule = require('./widgets/advCtrls/grids/kekule.widget.dataSets')(Kekule)
Kekule = require('./widgets/advCtrls/grids/kekule.widget.dataGrids')(Kekule)
Kekule = require('./widgets/sys/kekule.widget.sysMsgs')(Kekule)
Kekule = require('./widgets/operation/kekule.operHistoryTreeViews')(Kekule)
Kekule = require('./algorithm/kekule.graph')(Kekule)
Kekule = require('./algorithm/kekule.structures.helpers')(Kekule)
Kekule = require('./algorithm/kekule.structures.canonicalizers')(Kekule)
Kekule = require('./algorithm/kekule.structures.ringSearches')(Kekule)
Kekule = require('./algorithm/kekule.structures.aromatics')(Kekule)
Kekule = require('./algorithm/kekule.structures.standardizers')(Kekule)
Kekule = require('./algorithm/kekule.structures.searches')(Kekule)
Kekule = require('./algorithm/kekule.structures.stereos')(Kekule)
Kekule = require('./widgets/chem/kekule.chemWidget.base')(Kekule)
Kekule = require('./widgets/chem/kekule.chemWidget.dialogs')(Kekule)
Kekule = require('./widgets/chem/periodicTable/kekule.chemWidget.periodicTables')(Kekule)
Kekule = require('./widgets/chem/kekule.chemWidget.chemObjDisplayers')(Kekule)
Kekule = require('./widgets/chem/structureTreeView/kekule.chemWidget.structureTreeViews')(Kekule)
Kekule = require('./widgets/chem/uiMarker/kekule.chemWidget.uiMarkers')(Kekule)
Kekule = require('./widgets/chem/viewer/kekule.chemWidget.viewers')(Kekule)
Kekule = require('./widgets/chem/viewer/kekule.chemWidget.viewerGrids')(Kekule)
Kekule = require('./widgets/chem/viewer/kekule.chemWidget.chemObjInserters')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.extensions')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.baseEditors')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.operations')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.editorUtils')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.configs')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.repositoryData')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.repositories')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.utilWidgets')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.chemSpaceEditors')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.nexus')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.composers')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.actions')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.trackParser')(Kekule)
Kekule = require('./widgets/chem/editor/kekule.chemEditor.objModifiers')(Kekule)
Kekule = require('./widgets/chem/editor/modifiers/kekule.chemEditor.styleModifiers')(Kekule)
Kekule = require('./widgets/chem/editor/modifiers/kekule.chemEditor.textModifiers')(Kekule)
Kekule = require('./widgets/chem/editor/modifiers/kekule.chemEditor.structureModifiers')(Kekule)
Kekule = require('./widgets/advCtrls/objInspector/kekule.widget.objInspector.chemPropEditors')(Kekule)
Kekule = require('./calculation/kekule.calc.base')(Kekule)
Kekule = require('./_extras/kekule.emscriptenUtils')(Kekule)
Kekule = require('./_extras/InChI/kekule.inchi')(Kekule)
Kekule = require('./localization/en/kekule.localize.extras.openbabel.en')(Kekule)
Kekule = require('./_extras/OpenBabel/kekule.openbabel.base')(Kekule)
Kekule = require('./_extras/OpenBabel/kekule.openbabel.io')(Kekule)
Kekule = require('./_extras/OpenBabel/kekule.openbabel.structures')(Kekule)
Kekule = require('./_extras/Indigo/kekule.indigo.base')(Kekule)
Kekule = require('./_extras/Indigo/kekule.indigo.io')(Kekule)

Kekule._loaded()

var Class = require('./lan/classes').Class
var ClassEx = require('./lan/classes').ClassEx
var ObjectEx = require('./lan/classes').ObjectEx
var DataType = require('./lan/classes').DataType

exports.Kekule = Kekule
exports.Class = Class
exports.ClassEx = ClassEx
exports.ObjectEx = ObjectEx
exports.DataType = DataType
