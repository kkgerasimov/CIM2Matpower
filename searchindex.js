Search.setIndex({envversion:46,filenames:["Algorithm","CIM2Matpower","Dependencies","Introduction","PostProcess_mpc","PreProcess_CIM_files","Topology_BusBranch","Topology_NodeBreaker","index","matlab_files","source_code_doc"],objects:{"":{CIM2Matpower:[1,0,0,"-"],PostProcess_mpc:[4,0,0,"-"],PreProcess_CIM_files:[5,0,0,"-"],Topology_BusBranch:[6,0,0,"-"],Topology_NodeBreaker:[7,0,0,"-"]},"CIM2Matpower.CIM2Matpower":{"_create_bb_topology":[1,2,1,""],"_create_branches":[1,2,1,""],"_create_buses_and_gens":[1,2,1,""],"_find_tnode":[1,2,1,""],"_get_acline_mva_lim":[1,2,1,""],"_get_base_voltage":[1,2,1,""],"_get_cls":[1,2,1,""],"_get_equipment_cls":[1,2,1,""],"_get_position_points":[1,2,1,""],"_iterate_prim_eq":[1,2,1,""],"_primary_one_t":[1,1,1,""],"_primary_two_t":[1,1,1,""],"_process_cnode":[1,2,1,""],"_secondary_one_t":[1,1,1,""],"_secondary_two_t":[1,1,1,""],import_cim:[1,2,1,""]},"Topology_BusBranch.Branch":{angle:[6,1,1,""],angle_max:[6,1,1,""],angle_min:[6,1,1,""],b:[6,1,1,""],from_bus:[6,1,1,""],name:[6,1,1,""],online:[6,1,1,""],p_from:[6,1,1,""],p_to:[6,1,1,""],q_from:[6,1,1,""],q_to:[6,1,1,""],r:[6,1,1,""],rate_a:[6,1,1,""],rate_b:[6,1,1,""],rate_c:[6,1,1,""],ratio:[6,1,1,""],to_bus:[6,1,1,""],x:[6,1,1,""]},"Topology_BusBranch.Bus":{area:[6,1,1,""],base_kv:[6,1,1,""],bs:[6,1,1,""],btype:[6,1,1,""],gs:[6,1,1,""],id:[6,1,1,""],id_generator:[6,1,1,""],name:[6,1,1,""],pd:[6,1,1,""],pd_orig:[6,1,1,""],qd:[6,1,1,""],qd_orig:[6,1,1,""],reset:[6,2,1,""],va:[6,1,1,""],vm:[6,1,1,""],vm_max:[6,1,1,""],vm_min:[6,1,1,""],zone:[6,1,1,""]},"Topology_BusBranch.Case":{reset:[6,2,1,""]},"Topology_BusBranch.Generator":{apf:[6,1,1,""],base_mva:[6,1,1,""],bus:[6,1,1,""],name:[6,1,1,""],online:[6,1,1,""],pc1:[6,1,1,""],pc2:[6,1,1,""],pg:[6,1,1,""],pg_max:[6,1,1,""],pg_min:[6,1,1,""],pg_orig:[6,1,1,""],qc1_max:[6,1,1,""],qc1_min:[6,1,1,""],qc2_max:[6,1,1,""],qc2_min:[6,1,1,""],qg:[6,1,1,""],qg_max:[6,1,1,""],qg_min:[6,1,1,""],qg_orig:[6,1,1,""],ramp_10:[6,1,1,""],ramp_30:[6,1,1,""],ramp_agc:[6,1,1,""],ramp_q:[6,1,1,""],reset:[6,2,1,""],vg:[6,1,1,""]},"Topology_BusBranch.Point":{"_asdict":[6,2,1,""],"_fields":[6,1,1,""],"_make":[6,4,1,""],"_replace":[6,2,1,""],x:[6,1,1,""],y:[6,1,1,""]},"Topology_NodeBreaker.Area":{id:[7,1,1,""],id_cim:[7,1,1,""],name:[7,1,1,""],netInterchange:[7,1,1,""],pTolerance:[7,1,1,""]},"Topology_NodeBreaker.Branch":{id:[7,1,1,""],id_cim:[7,1,1,""],name:[7,1,1,""],node_from_id:[7,1,1,""],node_to_id:[7,1,1,""],status_from:[7,1,1,""],status_to:[7,1,1,""]},"Topology_NodeBreaker.Generator":{fuel_type:[7,1,1,""],id:[7,1,1,""],id_cim:[7,1,1,""],mode:[7,1,1,""],name:[7,1,1,""],node_id:[7,1,1,""],type:[7,1,1,""]},"Topology_NodeBreaker.Load":{id_cim:[7,1,1,""],name:[7,1,1,""],node_id:[7,1,1,""],p_mw:[7,1,1,""],q_mvar:[7,1,1,""],status:[7,1,1,""]},"Topology_NodeBreaker.Node":{bus_id:[7,1,1,""],desc:[7,1,1,""],id:[7,1,1,""],id_cim:[7,1,1,""],name:[7,1,1,""]},"Topology_NodeBreaker.PhaseTapChanger":{angle_shift_deg_list:[7,1,1,""],branch_id:[7,1,1,""],continuous_position:[7,1,1,""],id_cim:[7,1,1,""],step_num_list:[7,1,1,""],x_pu_list:[7,1,1,""]},"Topology_NodeBreaker.RatioTapChanger":{RC_discrete:[7,1,1,""],RC_mode:[7,1,1,""],RC_targetRange_kV:[7,1,1,""],RC_targetValue_kV:[7,1,1,""],branch_id:[7,1,1,""],continuousPosition:[7,1,1,""],hasRegulatingControl:[7,1,1,""],highStep:[7,1,1,""],id_cim:[7,1,1,""],lowStep:[7,1,1,""],neutralU_kV:[7,1,1,""],stepVoltageIncrement_kV:[7,1,1,""]},"Topology_NodeBreaker.Shunt":{bPerSection_MVAr:[7,1,1,""],gPerSection_MVAr:[7,1,1,""],id_cim:[7,1,1,""],maximumSections:[7,1,1,""],name:[7,1,1,""],node_id:[7,1,1,""],numActiveSections:[7,1,1,""],status:[7,1,1,""]},"Topology_NodeBreaker.Substation":{id_cim:[7,1,1,""],name:[7,1,1,""],node_id_list:[7,1,1,""]},"Topology_NodeBreaker.Switch":{branch_id:[7,1,1,""],id_cim:[7,1,1,""],name:[7,1,1,""],node_from_id:[7,1,1,""],node_to_id:[7,1,1,""],status:[7,1,1,""]},"Topology_NodeBreaker.Topology_NodeBreaker":{CIM_filenames:[7,1,1,""],areas:[7,1,1,""],branches:[7,1,1,""],generators:[7,1,1,""],loads:[7,1,1,""],nodes:[7,1,1,""],phasetapchangers:[7,1,1,""],ratiotapchangers:[7,1,1,""],shunts:[7,1,1,""],substations:[7,1,1,""],switches:[7,1,1,""],zones:[7,1,1,""]},"Topology_NodeBreaker.Zone":{id:[7,1,1,""],id_cim:[7,1,1,""],name:[7,1,1,""]},CIM2Matpower:{CIM2Matpower:[1,3,1,""],cim_to_mpc:[1,5,1,""]},PostProcess_mpc:{"_fill_branch_array":[4,5,1,""],"_fill_bus_array":[4,5,1,""],"_fill_gen_array":[4,5,1,""],"_make_branch_list":[4,5,1,""],"_make_bus_list":[4,5,1,""],"_make_bus_names":[4,5,1,""],"_make_gen_list":[4,5,1,""],create_mpc:[4,5,1,""]},PreProcess_CIM_files:{fix_RTE_cim_files:[5,5,1,""],fix_cim_files:[5,5,1,""]},Topology_BusBranch:{Branch:[6,3,1,""],Bus:[6,3,1,""],Case:[6,3,1,""],Generator:[6,3,1,""],Point:[6,3,1,""],bus_type:[6,6,1,""]},Topology_NodeBreaker:{Area:[7,3,1,""],Branch:[7,3,1,""],Generator:[7,3,1,""],Load:[7,3,1,""],Node:[7,3,1,""],PhaseTapChanger:[7,3,1,""],RatioTapChanger:[7,3,1,""],Shunt:[7,3,1,""],Substation:[7,3,1,""],Switch:[7,3,1,""],Topology_NodeBreaker:[7,3,1,""],Zone:[7,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","method","Python method"],"3":["py","class","Python class"],"4":["py","classmethod","Python class method"],"5":["py","function","Python function"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:method","3":"py:class","4":"py:classmethod","5":"py:function","6":"py:data"},terms:{"0x000000001e2a0e50":6,"__new__":6,"_asdict":6,"_create_bb_topolog":1,"_create_branch":1,"_create_buses_and_gen":[1,7],"_eq":[1,9],"_field":6,"_fill_branch_arrai":4,"_fill_bus_arrai":4,"_fill_gen_arrai":4,"_find_tnod":1,"_get_acline_mva_lim":1,"_get_base_voltag":1,"_get_cl":1,"_get_equipment_cl":1,"_get_position_point":1,"_iterate_prim_eq":[1,7],"_make":6,"_make_branch_list":4,"_make_bus_list":4,"_make_bus_nam":4,"_make_gen_list":4,"_primary_one_t":1,"_primary_two_t":1,"_process_cnod":1,"_replac":6,"_secondary_one_t":1,"_secondary_two_t":1,"_self":6,"_sv":[1,9],"_tp":[1,9],"boolean":[2,7],"case":[1,3,4,6,7,9],"class":[1,6,7],"default":[6,8],"export":[2,3],"float":7,"function":[0,1,2,3,4,5,6,7,9],"import":[0,1,2,3,7,9],"long":6,"new":6,"return":[1,4,5,6,9],"short":6,"static":8,"switch":[1,2,3,7,9],"true":6,abl:5,about:[1,3,5,7,9],access:5,accord:7,aclin:1,aclineseg:[1,7],action:[2,3,7,9],activ:6,activepow:7,actual:[1,7],add:[1,2],addit:[1,3,7],addition:3,adjust:2,admitt:9,advanc:7,after:8,again:[1,8],against:8,agc:6,aggereg:7,alia:6,all:[1,6,7],also:[3,6,7,8,9],alwai:9,ampl:9,angl:6,angle_max:6,angle_min:6,angle_shift_deg_list:7,apf:6,api:8,appli:5,applic:8,area:[1,6,7],argument:9,arrai:[1,4,9],arrow:2,aspx:8,assign:7,assumpt:7,attach:6,attribut:[2,6,7],author:[1,2,3,4,5,6,7,8,9],autogener:[6,7],avail:[3,8],back:[4,9],base:[1,4,6,8,9],base_kv:6,base_mva:6,basemva:6,basepower_mva:1,basic:7,becaus:[1,2,7,9],befor:[4,5],below:2,between:[2,6],biggest:7,biggest_tnode_island:1,block:0,both:6,boundari:[1,9],boundary_profil:[1,9],bpersect:7,bpersection_mvar:7,branch:[1,4,6,7,9],branch_arrai:4,branch_id:7,breaker:9,btype:6,bug:2,built:6,bus_area:7,bus_arrai:4,bus_id:[4,7],bus_typ:6,busbranch:[1,2,3,7,9],busbreak:9,buse:[1,6],busnam:4,bustyp:6,calcul:4,call:[0,3,7,9],can:[1,6,8,9],cancel:9,cannot:[1,9],capabl:6,caus:9,cell:9,certain:[4,5],chang:[8,9],charact:[1,9],charg:6,cim14:[2,5],cim2busbranch:[3,4,8],cim:[0,1,2,4,5,7,8,9],cim_bb2nod:[],cim_fil:[1,5,9],cim_filenam:7,cim_nodal2bb:[],cim_object:1,cim_read:[],cim_to_mpc:[1,4,5],cim_vers:5,cimfil:1,cimug:8,cimv14:[2,3,7,8,9],classmethod:6,close:7,code:[],com:[1,2,3,4,5,6,7,8,9],come:[1,7,9],comment:9,common:[2,8,9],compli:7,compliant:5,condit:9,conduct:6,conductor:1,connect:[1,6,7],connector:1,consist:2,constant:6,contain:[1,5,6,7,9],content:[1,8],continuous_posit:7,continuousposit:7,continuoussect:7,control:1,controlarea:[2,7],converg:9,convert:4,cope:9,copyright:[],core:[1,7],correspond:7,count:6,count_of_substitut:5,creat:[1,2,3,4,5,6,7,8,9],create_mpc:4,creation:9,credit:[1,2,3,4,5,6,7,8,9],current:[2,7,9],curv:6,curvedata:5,dash:2,data:[1,7,9],datatyp:7,date:[1,2,3,4,5,6,7,8,9],defin:[4,5,6],definit:[6,7],deg:7,degre:6,delai:6,demand:[6,7],desc:7,descript:7,design:8,despit:9,detail:[],develop:[2,3,8,9],dialogu:9,dictionari:[1,5],differ:[1,6,9],directli:9,discret:7,documen:8,document:[],doe:5,done:2,download:8,draft:8,each:[1,7],edit:8,either:7,electa:[],emerg:6,empti:[7,9],encod:1,end:[6,9],energi:8,energyconsum:[1,7],energysourc:1,enterprisearchitect:8,entso:3,equip:1,exampl:[2,3,7],explicitli:9,extens:4,factor:6,fail:[1,9],fals:[6,7],field:[6,7,9],figur:2,file:[],fileformat:[],filenam:[1,9],fill:4,find:1,fine:[2,3,7],finish:4,fit:1,fix:[4,5],fix_cim_fil:5,fix_rte_cim_fil:[5,9],flow:4,follow:[5,6],form:7,format:5,fossilfuel:7,fossilfueltyp:7,found:1,frame:[0,9],free:8,freeli:8,french:[3,9],from:[0,1,2,3,4,5,6,7,8,9],from_bu:6,fuel_typ:7,full:[1,9],garpur:[1,2,3,4,5,6,7,8,9],gen:[4,7],gen_arrai:4,gener:[1,4,5,6,7],generatingunit:7,gerasimov:[1,2,3,4,5,6,7,8,9],get:1,github:8,give:9,global:6,gmail:[1,2,3,4,5,6,7,8,9],goe:[5,7],gpersect:7,gpersection_mvar:7,graph:6,green:[0,2],ground:1,group:8,had:6,happen:0,hasregulatingcontrol:7,have:[7,9],highest:7,highstep:7,hit:9,hold:6,how:7,howev:[2,3,5,7,9],html:[4,5],http:[1,2,3,4,5,6,7,8,9],id_cim:7,id_gener:6,identifi:7,iec61970:[2,7],iec:[2,9],ill:9,imped:[7,9],implement:[2,5,7,9],import_cim:1,increment:7,index:8,info:7,inform:[1,2,3,7,8,9],inherit:7,initi:6,inject:[6,7],input:5,instanc:[4,6],instead:7,integ:[6,7],intend:[0,2],interact:9,interfac:[2,8],introductori:[],irrelev:9,isol:6,iter:[1,6],keep:[1,3],kkgerasimov:[1,2,3,4,5,6,7,8,9],konstantin:[1,2,3,4,5,6,7,8,9],kwd:6,last:8,latest:8,lead:5,leav:9,len:6,less:9,leuven:[1,2,3,4,5,6,7,8,9],line:[1,6],list:[1,4,5,7],lite:8,load:[1,6,7],loadarea:7,loadmodel:7,log:[1,2,9],log_filenam:[1,9],loss:6,low:[7,9],lower:6,lowstep:7,machin:6,made:[5,9],magnitud:6,mai:8,mail:[1,2,3,4,5,6,7,8,9],main:[1,2],mainli:2,make:[3,6],manag:8,map:6,matlab:[],matpow:[1,3,4,6,7,9],matric:1,matrix:9,maximum:6,maximumsect:7,mean:[4,5,9],method:6,might:[7,9],min:6,mind:3,minimum:6,minor:2,minut:6,mode:7,model:[2,3,5,7,8,9],modifi:2,most:[4,5],mostli:4,mpc:[1,3,4,7,9],mpc_bb2nodal:[4,5,7,9],mpc_bb:9,mpc_nodal2bb:[4,5,9],mpc_nodal:9,mpc_nodal_origin:9,mrid:7,must:[1,9],mva:6,mvar:[6,7],name:[1,6,7,9],necessari:[2,7],need:1,netinterchang:7,network:[2,3,6,7,8],neutral:7,neutralu:7,neutralu_kv:7,never:4,node:[1,6,7],node_breaker_topolog:4,node_from_id:7,node_id:7,node_id_list:7,node_to_id:7,nodebranch:9,nodebreak:[1,2,3,7,9],nodebreaker_topolog:9,nomin:6,none:[5,6,7],numactivesect:7,number:[6,7],object:[1,4,5,6,7],off:6,often:[4,5],onli:[1,2,7,9],onlin:6,open:[2,7,9],opensourc:4,oper:[3,7],operatingmod:7,opposit:[5,7],optim:[3,9],option:1,order:[1,2,7,9],ordereddict:6,org:[2,3,8],orient:6,origin:[2,6,7,9],original_str:5,orign:4,other:[1,3,5],otherwis:1,out:[6,7],output:6,over:1,p_from:6,p_mw:7,p_to:6,p_transform:1,packag:[2,3,5,8,9],page:8,pakcag:2,param:9,paramet:[1,5],pars:[1,4,5,9],parser:9,part:[1,2,3,4,5,6,7,8,9],particip:6,pass:[1,7],path:[1,9],pc1:6,pc2:6,pd_orig:6,peculiar:9,per:7,perform:[2,7],pg_max:6,pg_min:6,pg_orig:6,phase:[6,7],phasetapchang:[1,7],place:7,platform:9,point:[1,5,6],posit:[1,6,7],possibl:[3,7],postprocess_cim_fil:4,power:[4,6,7],powerflow:9,powertransform:[1,7],prefer:[1,9],prefix:7,preprocess:[4,5],present:[0,1,2],preserv:[7,9],primari:7,problem:[7,9],process:1,profil:[3,8,9],program:8,project:[1,2,3,4,5,6,7,8,9],properti:7,prototyp:9,provid:[1,3,5,9],ptoler:7,purpos:9,pycim:[1,2,4,5,8,9],pypi:[2,3,8],pypow:4,python:[0,1,2,3,4,7,8,9],q_from:6,q_mvar:7,q_to:6,qc1_max:6,qc1_min:6,qc2_max:6,qc2_min:6,qd_orig:6,qg_max:6,qg_min:6,qg_orig:6,quantif:9,rais:1,ramp:6,ramp_10:6,ramp_30:6,ramp_agc:6,ramp_q:6,rate:6,rate_a:6,rate_b:6,rate_c:6,ratio:6,ratiotapchang:[1,7],rc_discret:7,rc_mode:7,rc_targetrange_kv:7,rc_targetvalue_kv:7,rdf:1,rdfxmlreader:[2,4,5],reactanc:[6,7],reactiv:6,reactivecapabilitycurv:5,reactivepow:7,read:[2,5,9],real:6,rectifierinvert:1,recurs:1,red:[0,2],ref:6,refenrec:8,refer:[6,7],registr:8,regular:9,regulatingcondeq:1,regulatingcontrol:7,relev:9,replac:6,reporitori:8,repres:[2,6,7,9],repsenet:7,requir:7,reserv:[6,7],reset:6,resist:6,restart:9,result:[4,9],revis:[],rte:[2,3,5,7,9],rwl:8,sai:9,same:[1,5,7],save:[1,9],search:8,sec:6,secondari:7,section:7,see:[7,8],select:9,self:[1,6],separ:7,sequenc:6,seriescompens:[1,7],server:[],servic:6,set:[1,5,7,9],setpoint:6,shed:7,shift:[6,7],should:[1,3,5,7],shown:2,shunt:[1,6,7],shuntcompens:7,side:6,snippet:0,softwar:9,some:[2,7,9],sometim:9,sourc:[],sparxsystem:8,special:[2,9],specif:[5,7],specifi:[1,5,6],src_termin:1,standard:[2,5,8,9],start:[4,6,7],statevari:7,staticvarcompens:7,statu:[6,7],status_from:7,status_to:7,step:7,step_num_list:7,stepvoltageincr:7,stepvoltageincrement_kv:7,still:1,sting:[7,9],store:7,string:[1,5,7,9],struct:[7,9],structur:[1,2,3,6,7,9],subgeographicalregion:7,subsequ:[6,7],subst_id:5,substat:[1,7],substitut:5,substitution_str:5,support:9,suscept:6,svpowerflow:7,svshuntcompensatorsect:7,svtapstep:7,swtich:7,synchronousmachin:7,system:[2,3,7,8],tag:[4,5],tap:7,tapchang:7,targetrang:7,targetvalu:7,term:6,termin:[1,7,9],test:[8,9],thei:[1,4,5,6,9],them:[7,8,9],therefor:7,thermalgeneratingunit:7,thi:[1,4,5,6,7,9],three:[1,9],through:9,thu:9,timescal:6,tnode:1,to_bu:6,togeth:1,tool:[1,2,3,7],topolog:[1,2,3,7,9],topologicalisland:7,topologicalnod:[1,2,7],topology_busbranch:[],topology_nodebreak:[],total:6,toupl:1,track:1,transform:[1,3,6,7,9],transformerwind:1,translat:9,transmiss:[2,3,8],transofmr:2,treat:7,tri:1,tsm:[],tso:[7,9],tune:[2,3,7],turn:6,two:[1,9],type:[3,6,7],ucaiug:8,uml:8,unavail:7,unicod:9,unidoc:1,uniqu:7,upload:[],upper:6,user:[8,9],usual:[1,7,9],util:9,valu:[2,4,6],valueerror:1,versa:2,versioney:4,vertex:6,vice:2,view:8,viewer:8,visit:1,vm_max:6,vm_min:6,voltag:[1,6,7],websit:8,were:[1,7],what:9,when:[6,7],where:1,whether:9,which:[1,2,5,6,7,9],why:7,wind:7,wire:7,within:[3,5,7],work:2,write:4,wrong:9,www:[1,2,3,4,5,6,7,8,9],x_pu_list:7,xml:[1,5,9],yet:7,you:[1,8,9],zone:[1,6,7]},titles:["Algorithm","CIM2Matpower module","Sturcture and Dependencies","Introduction","PostProcess_mpc module","PreProcess_CIM_files module","Topology_BusBranch module","Topology_NodeBreaker module","Welcome to CIM2Matpower&#8217;s documentation!","Matlab files","Source code documentation"],titleterms:{algorithm:0,cim2matpow:[1,8],cim_bb2nod:9,cim_nodal2bb:9,cim_read:9,code:10,depend:2,document:[8,10],file:9,fileformat:9,indic:8,introduct:3,matlab:9,modul:[1,4,5,6,7],postprocess_mpc:4,preprocess_cim_fil:5,sourc:10,sturctur:2,tabl:8,topology_busbranch:6,topology_nodebreak:7,tsm:9,welcom:8}})