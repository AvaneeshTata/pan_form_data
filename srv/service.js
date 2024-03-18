const cds = require('@sap/cds')
const express = require('express');
var http = require('https');
const axios = require('axios');
// const _ = require('lodash');
const { array, insert } = require('@sap/cds/lib');
const { URLSearchParams } = require('url');
const { isNumberObject } = require('util/types');
const { vary } = require('express/lib/response');
require('log-timestamp');
const {
  Worker, isMainThread, parentPort, workerData,
} = require('node:worker_threads');
// const { request } = require('http');

if(isMainThread){

module.exports = cds.service.impl(async function () {
    let {
        attachments,tab1,tab2,tab3,vendor_data,Fvendor_responseoo,PAYMENT_TERM_DETAILS,WORKFLOW_HISTORY,PAN_PRICE_DETAILS,PAN_proj,PAN_Comments ,
        PAN_Details_APR,PAN_WEB_EVENT_APR,PAN_TYPE_APR,PAN_vendor_data_APR,PAN_vendor_response_APR,PAN_PAYMENT_TERM_DETAILS_APR,PAN_PRICE_DETAILS_APR,PAN_WORKFLOW_HISTORY_APR,PAN_attachments_APR,PAN_proj_APR,PAN_Comments_APR,vendorTaxDetails_APR
    } = this.entities;
  // const plant_data = await cds.connect.to('plant');
  const getcall = await cds.connect.to('getcall');

  // var temp = '';

  // this.before('POST',User_data,async (req)=>{
  //     temp = req.data;
  // })

  var body = " ";
  this.on('postUserDataDate',async (req)=>{
    console.log(req?.data);
  // })
  // this.before('READ', PAN_Details_APR, async (req) => {
    debugger

    const createWorker = function(url,query,basis){
      return new Promise((resolve,reject)=>{
          const worker = new Worker(__filename, { workerData: { url: url ,query: query , basis: basis }});

          worker.on('message',(message)=>{
              resolve(message);
          })
          // worker.on('error',(error)=>{
          //     reject(error);
          // })
      })
  } 
    // await cds.tx(req).run(DELETE.from(tab1));
    // 
    // let rs = await SELECT.from(tab1);
    // let re = await SELECT.from(PAN_Details_APR);
    // let re1 = await SELECT.from(PAN_WEB_EVENT_APR);
    // await DELETE.from(PAN_Details);
    try{
    let array = [];
    let vendordata = [];
    let panheader = [];
    var vendorids = [];
    var vendorids1 = [];
    const unique2 = [];
    var purchasing_grp = "";
    var document_type = "";
   
    var baselinespend = "";
    var baselinespend1 = "";
    var sbg ="";
    var sbu ="";
    var savings=0;
    var ser_mate = "";
    var itemid = "";
    var extend_price=0;

    let supplier = [];
    var awarded_vendors = [];
    let supplier_count;
    let supplier1 = [];
    var na_ind=0;
    var na_date=[];
    let payment_details = [];
    let pan_vendor_response = [];
    let vendortaxdetails = [];
    let event_id;
    let number_of_vendors = 0;
    let plant="";
    var  v1sup_count=[];
    let finalproposedvalue = "";
    let plant_id = "";
    let plant_name = "";
    let GstNo = "";
    let sup_main_add ="";
    let cescore ="";
    var pcode="";
    var na_smdate="";
    let region1 = " ";
    var  Freight = ""
    var  discount_amt = 0;
    var inc="";
    var discount_amt1 = 0
    var erp_ind = "";
    var return_doc ="";
    var total_terms=[];
    var password = "";
    var original_quote = 0;
    
    var discount_amt2 = 0;
    var final_quote1 = 0;
    var original_quote1 = 0;
    var moneyValue = 0;
    var vfinal_quote =0;
    var acc_subdate='';
    var tec_rank=[];
    var eventNo=0;
    
    var proj_desc = "";
    var proj_currency = "";
    var web_publish_date="";
    var web_publish_date1="";
    var final_date;
    var doc_status;
    var dis_per=0;
    var plant_details = [];
    var shrt_lst_count = [];
    var project_currency = [];
    var projects_docs = [];
    var price_details = [];
    var item_details = [];
    var price_details1 = [];
    var pan_web_event = [];
    var pan_type = [];
    var web_tab1_amt = [];
    var web_tab_amt = 0;
    var subdate = "";
    var web_tab_dates = [];
    var lead_bid_amount =[];
    var material_items = [];
    var no_of_proj = [];
    var UOM = "";
    var Amount = "";
    var SACCode = "";
    var IndianTaxPER = "";
    var ItemCode= "";
    var ItemShortDescription = "";
    var  ainv_id = " ";
    var UnitPrice="";
    var  Quantity="";
    var QuantityOverDeliveryTolerance="";
    var flag = 0;
    var flag1 = 0;
    var ex_price = 0;
    var web_amt = 0;
    var ex_price1 = [];
    var payment_type ="";
    var progress = "";
    var progress_documents = "";
    var retention_documents = "";
    var by = "";
    var by1 ="";
    var due_date = "";
    var retention = "";
    var percentage1 = "";
    var inco_terms = "";
    var srv_inco_terms = "";
    var abg = "";
    var cpbg = "";
    var ScopeandResponsibilities = "";
    var CommercialTerms = "";
    var ComplianceTerms = "";
    var Others = "";
    var UOM = "";
    var Amount ="";
    var SACCode = "";
    var IndianTaxPER = "";
    var ItemCode= "";
    var ItemShortDescription = "";
    var UnitPrice="";
    var  Quantity="";
    var QuantityOverDeliveryTolerance="";   
    var RequisitionID = ""; 
    var Subject_of_ProposalOROrder = "";
    var subject_of_proposal = "";
    var delivery_date ="";
    var create_date="";
    var create_date1 = "";
    var first_name = "";
    var last_name = "";
    var email = "";
    var mobile_phone = "";
    var contact_phone  = "";
    var supplier_contact1 = "";
    var awarded_vendor = "NO";
    var erpVendorID = "";
    var vendorname = "";
    var vendor_loc = 0;
    var web_sup_count = "";
    var pvendor = 0;
    var l1amount =[];
    var icon_type = "";
    var l1AmountObtained = 0;
    var final_quote = 0;
    var order_currency = "";
    var tech_commitee_clearedproposal = "";
    var delivery_schedule = "";
    var per_pay_pro = "";
    var per_pay_ret = "";
    var Advance = "";  
    var int_id = "";
    var l1Amount = 0;
    var uniqueName1 = "";
    var uniqueName = "";
    var lamount = 0;
    var web_tab1 = [];
    var web_tab2 = [];
    var venador_names=[];
    var terms2 = [];
    var sc_web_tab2 = [];
    var bid_currency = "";
    var  ven_award = 0;
    var l2Amount = 0;
    var delivery_schedule1 = "";
    var award_vendor1 = "NO";
    var vendordata1 = [];
    var scenario_data = [];
    var sup_count = 0;
    var cur_pro_id = "";
    var tolerence = "";
    var len1 = 0;
    var pro_ind = 0;
    var l3Amount = 0;
    var l4Amount = 0;
    var pro_ind = 0;
    var no_of_docs = [];
    var tsk_doc_id = "";
    var tsk_id = "";
    var tsk_ind = 0;
    var web_pub_date="";
    var workerPromises = [];
    var final_quotearr = [];
    var thread_results=[];
    var scenarios_payload = "";
    var version=0;
    var w_type="";
    var version1 =[];
    var v1amt=0;
    var vname = "";
    var erp_id = "";
    var sm_id = "";
    var items = "";
    var web_logic=[];
    var tec_app = 0;
    var tech_acc='';
    var tech_app='';
    var web_event = [];
    var pageno = 0;
    var extfield = [];
    var ptype = "";
    var ptype1 =[];
    var Advance_per="";
   
    
    
    
     

   

   var createdby = "";
    // // GETTING ALL PENDING TASKS
    var userName1 = "PANCreator";
   
    var userName = req.data.userName;
    // var userName = "TPLBuyer";
    // var userName = "rakeshdattatrayshelars@tataprojects.com"
    // var userName = "nitind@tataprojects.com";
    password = "PasswordAdapter1"
    if(userName == "TPLBuyer"){
       createdby = "harshvardhans-v@tataprojects.com";
       password = "ThirdPartyUser"
    }else{
      createdby = userName;

    }
    console.log(createdby);
    
    // password = "ThirdPartyUser"
    
    cur_pro_id = req.data.projectid;
    // cur_pro_id = "WS1007313163";  //usecase 3 p
    // cur_pro_id = "WS1018768312";
    // cur_pro_id = "WS1014144301";
    // cur_pro_id = "WS1017070569";
    // cur_pro_id = "WS1012623630" //service
    // cur_pro_id = "WS1005421389" //usecase4 error
    // cur_pro_id = "WS1024436148"
    // cur_pro_id = "WS1026706322"
    // cur_pro_id ="WS1026706322";
    // cur_pro_id = "WS1026978351"
    // cur_pro_id = "WS1028313509";
    // cur_pro_id = "WS1029893746";
      // cur_pro_id = "WS1009730221";
      // cur_pro_id = "WS1032547017"
      // cur_pro_id = "WS1032525332";
      // cur_pro_id = "WS1009730221";
      // cur_pro_id = "WS1029893746";
      // cur_pro_id = "WS1026781862";//18 suppliers
      // cur_pro_id="WS1038454212";
      // cur_pro_id = "WS1026978351";
      // cur_pro_id = "WS1036334661"; //original issue
      // cur_pro_id="WS1038657481"; //serv comp
      // cur_pro_id = "WS1038420644"; //comp
      // cur_pro_id = "WS1038885782";
      // cur_pro_id = "WS1038437050";
      // cur_pro_id = "WS1038885710";
      // cur_pro_id="WS1039638442";
      // cur_pro_id="WS1040861899";
      // cur_pro_id="WS1041531151";
      // cur_pro_id = "WS1040861899";
      // cur_pro_id = "WS1043622865"

    
     

      function returndate(input){
        let a = input;
        let [y,m,d] = a.split('-');
        let jumbleDate = d + "/" + m + "/" + y
        return jumbleDate

        // var date = new Date(input);

        // var options = { weekday:'short',day: '2-digit',month: 'short', year: 'numeric' };
        // var formattedDate = date.toLocaleDateString('en-US', options);

        //  return formattedDate
       }




     
      var project_id = cur_pro_id;

      





      // if(tsk_ind == 0){
      // GETTING ALL THE DOC IDS BASED ON PROJECT ID
      var number_of_docs="";
      try{
      getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-project-management/v2/prod/projects/'+project_id+'/documents';
      getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=sBh8lruEqVaengu68NvPZgjEnPHhbCdw';
      getcall.destination.headers.basis = 'Basic YTE3MzUzZjMtOTJlNy00NTM3LWI0NzctZmQ2MDVhYmFmN2FiOnBHVDdlZmduczFXOG9ZYUFycDlWQjJ6d0t2UEFhcFJH';
       number_of_docs = await getcall.tx(req).get('/getcall');
      }catch(error){
        return "no data for this user";
      }
      // let doc = doc_data;
      // console.log(number_of_docs.payload);
      // console.log(number_of_docs.payload[0]);
      if (number_of_docs.payload.length != 0){
     
      for(let k=0;k<number_of_docs.payload.length;k++){
        if(number_of_docs.payload[k].type == 'RFx' && number_of_docs.payload[k].status != 'Draft'){
          let doc_id = number_of_docs.payload[k].internalId;
          // let doc_id = "Doc1007341724";
         

          getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id;
          getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
          getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
          project_currency = await getcall.tx(req).get('/getcall');
          var d = project_currency;
          if(project_currency != ""){
            if("currency" in project_currency){
            proj_currency = `${project_currency.currency}`;
            }
            if("openDate" in project_currency ){
              web_publish_date = project_currency.openDate;
              const dateObj = new Date(web_publish_date);
              web_pub_date = project_currency.openDate;
              web_publish_date = dateObj.toISOString().split('T')[0];
              web_publish_date1 =  returndate(web_publish_date);
            }
            if("createDate" in project_currency ){
            create_date = project_currency.createDate;
            const dateObj1 = new Date(create_date);
            create_date = dateObj1.toISOString().split('T')[0];
            create_date1 = returndate(create_date)
            }
            if(web_publish_date !=""&& create_date!="" ){
              var formatdate = new Date(web_publish_date);
              var formatdate1 = new Date(create_date);
            }
            
            
  
            var diffTime = Math.abs(formatdate - formatdate1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            // console.log(diffTime + " milliseconds");
            final_date = diffDays + " days";
              }
          else{
            proj_currency  = "";
            web_publish_date = "";
                  }

                  no_of_docs.push({
                    doc_id :number_of_docs.payload[k].internalId,
                    icon_type : number_of_docs.payload[k].iconType,
                    status : number_of_docs.payload[k].status,
                    web_pub_date : web_pub_date,
                    web_publish_date : web_publish_date1,
                    create_date : create_date1,
                    final_date : final_date,
                  })      
 
          var obj = "pendingAwardApprovalTaskId";
          // if(project_currency.includes(obj)){
            if(obj in project_currency){
            tsk_id = project_currency.pendingAwardApprovalTaskId;
            tsk_doc_id = doc_id;
            // version = project_currency.documentVersion;
            // w_type = project_currency.eventTypeName;
            pro_ind = 1;
          }
        }
      }  
      
      const task_ids = await SELECT.from(PAN_Details_APR).where ({ ProjectId : cur_pro_id});
      if(task_ids.length != 0){
          for(let i = 0;i<task_ids.length;i++){
            if(tsk_id == task_ids[i].task_id){
              tsk_ind = 1;
              return_doc = task_ids[i].PAN_Number;
            }
          }
        }
     

    //  tsk_doc_id = "Doc1012639535";
    //  version=3;
    // pro_ind = 1; //dont forget to  comment it only for now d
      
    if(pro_ind == 1){
     if(tsk_ind == 0){
      
      if(no_of_docs.length != 0){
      for(let i1 = 0;i1<no_of_docs.length;i1++){
        // if(number_of_docs.payload[i1].type == 'RFx' && number_of_docs.payload[i1].status != 'Draft'){

          // let doc_id = number_of_docs.payload[i1].internalId;
          doc_id = no_of_docs[i1].doc_id;
          var doc_status = no_of_docs[i1].status;
          icon_type = no_of_docs[i1].icon_type;

          
         if(doc_id == tsk_doc_id ){
           uniqueName1 = tsk_id;
         }
         else{
          uniqueName1 = "";
         }
          

        

       
          function returnamt(amt){
            let formattedamt = parseFloat(amt);
            formattedamt = formattedamt.toLocaleString('en-IN');;
            return formattedamt;
           }
          
           if(doc_id == tsk_doc_id){
            award_vendor1 = "YES";
            }else{
              award_vendor1 = "NO";
        }

      // let doc_id = response_data1.document.id
      if(doc_id == tsk_doc_id){
  //       var proj_details ="";
  //       try{
  //     getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-project-management/v2/prod/projects/'+project_id;
  //     getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=sBh8lruEqVaengu68NvPZgjEnPHhbCdw';
  //     getcall.destination.headers.basis = 'Basic YTE3MzUzZjMtOTJlNy00NTM3LWI0NzctZmQ2MDVhYmFmN2FiOnBHVDdlZmduczFXOG9ZYUFycDlWQjJ6d0t2UEFhcFJH'
  //     proj_details = await getcall.tx(req).get('/getcall');
  //       }catch(e){
  //         return e;
  //       }
  //     if (proj_details != ""){
  //       proj_desc = `${proj_details.description}`;
  //       purchasing_grp = `${proj_details.businessSystem.purchasingGroup[0].value}`
  //       // document_type = `${proj_details.businessSystem.documentType[0].value}`
  //       baselinespend = `${proj_details.baselineSpend.amount}`
  //       baselinespend1 = returnamt(baselinespend);
        
  //       // baselinespend = baselinespend.toLocaleString('en-IN');
        

  //        }

         

  //        getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/items';
  //       getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
  //       getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
  //         const response_data2 = await getcall.tx(req).get('/getcall');

  //         if (response_data2.payload.length != 0) {
    
          
  //           for( j = 0; j<response_data2.payload.length;j++){
  
  //             if(response_data2.payload[j].terms.length != 0){
  
  //              if(response_data2.payload[j].title == "Is this for Material/Service/Both?"){
  //               ser_mate = response_data2.payload[j].terms[0].value.simpleValue; 
  //              }
                
  //             if(doc_id == tsk_doc_id){
  //             if(ser_mate == "Material"){
  //             if (response_data2.payload[j].terms[0].title == "Price"){
  //               var terms1 = response_data2.payload[j].terms;
  //               // if (terms1.length != 0){
  //               for(let s=0;s<terms1.length;s++){
  //                 if(terms1[s].title == "Requisition ID" ){
  //                 RequisitionID = terms1[s].value.simpleValue;
  //                 }
  //                 if(terms1[s].title == "Plant"){
  //                   plant = terms1[s].value.simpleValue;
  //                   plant_id = plant.split(' ')[0];
  //                   plant_name = plant.split(' ').slice(1).join(' ');
  //                 }
  //               }
  //             }
  //             }
  //             else if(ser_mate == "Service"){
  //               if (response_data2.payload[j].terms[0].title == "Extended Price"){
  //                 var terms1 = response_data2.payload[j].terms;
  //                 // if (terms1.length != 0){
  //                 for(let s=0;s<terms1.length;s++){
  //                   if(terms1[s].title == "Requisition ID" ){
  //                   RequisitionID = terms1[s].value.simpleValue;
  //                   }
  //                   if(terms1[s].title == "Plant"){
  //                     plant = terms1[s].value.simpleValue;
  //                     plant_id = plant.split(' ')[0];
  //                     plant_name = plant.split(' ').slice(1).join(' ');
  //                   }
  //                 }
  //               }
  //             }
              
  //             if (response_data2.payload[j].title == "Subject of Proposal/Order"){ 
  //               // order_currency = response_data2.payload[j].currency.name;
  //               itemid = response_data2.payload[j].itemId;
  //               if(response_data2.payload[j].terms.length != 0){
  //               for(let s=0;s<response_data2.payload[j].terms.length;s++){
  //                   if(response_data2.payload[j].terms[s].title == "Subject of Proposal/Order"){
  //                     var value = "value";
  //                     if(Object.keys(response_data2.payload[j].terms[s]).includes(value)){
  //                       subject_of_proposal = response_data2.payload[j].terms[s].value.simpleValue;
  //                    }else{
  //                     subject_of_proposal = "  ";
  //                    }
  //                   }
  
  //               }
  //             }
  //               // if
  
  //             }
  //           }
  //           }
            
  
  //           }
  //             // var plant_query = "/plant?$filter=plant eq '"+plant_id+"'";
  //             //  plant_details = await plant_data.tx(req).get(plant_query);
  //             //  if(plant_details.value.length != 0 ){
  //             //   sbg = plant_details.value[0].SBG;
  //             //   sbu = plant_details.value[0].SBU;
  //             //  }
  //             //  else{
  //             //   sbg =null;
  //             //   sbu =null;
  //             //  }
  //             // var plant_res = plant_details;
  
  //             if(doc_id==tsk_doc_id){
  //             getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/items/'+itemid;
  //             getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
  //             getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
  //             const currency = await getcall.tx(req).get('/getcall');
  //             // var d = currency
  //             order_currency = currency.currency.name;
  //         }
  
  
               
  //           }
  //           else{
  //             return "no response data from event API ";
  //           }
       

  //       }




       
  //       // let task_id = response_data1.id;

  //     // itemiflow1.destination.headers.id = response_data1.document.id;
  //       // var docid ="/tab1?$filter=PAN_Number eq '"+response_data1.document.id +"'";

  //       // const doc_details = await header.tx(req).get(docid);
  //       // console.log(doc_details);


  //       if(doc_id == tsk_doc_id){
  //         var split_order="";
  //         try{
  //         getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/scenarios';
  //         getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
  //         getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
  //          split_order = await getcall.tx(req).get('/getcall');
  //         }catch(e){
  //           return e;
  //         }
  //          for(let o=0;o<split_order.payload.length;o++){
  //           if(split_order.payload[o].awardStatus == 7 || split_order.payload[o].awardStatus == 6){
  //             // ven_award = ven_award + 1;
  //             award_vendor1 = "YES";
  //             sup_count = split_order.payload[o].selectedSuppliersCount;
  //             for(let k = 0;k<split_order.payload[o].scenarioSummary.participantSummaryList.length;k++){
  //               awarded_vendors.push(split_order.payload[o].scenarioSummary.participantSummaryList[k].supplier.erpVendorID);
  //             }

  //             break;
  //           }
  //           // else{
  //           //   award_vendor1 = "NO";
  //           // }


  //          }
  //         }else{
  //           award_vendor1 = "NO";
  //         }

  //       // TECHNIACAL TEAM INFORMATION
  //     if(doc_id == tsk_doc_id){
  //     var teams="";
  //     try{
  //     getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-project-management/v2/prod/projects/'+project_id+'/teams';
  //     getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=sBh8lruEqVaengu68NvPZgjEnPHhbCdw';
  //     getcall.destination.headers.basis = 'Basic YTE3MzUzZjMtOTJlNy00NTM3LWI0NzctZmQ2MDVhYmFmN2FiOnBHVDdlZmduczFXOG9ZYUFycDlWQjJ6d0t2UEFhcFJH'
  //      teams = await getcall.tx(req).get('/getcall');
  //     }catch(e){
  //       return e;
  //     }
  //     var d1 = teams;
  //     tech_commitee_clearedproposal = "  ";
  //     if(teams.payload.length != 0){
  //     for(let r=0;r<teams.payload.length;r++){
  //       if(teams.payload[r].name == "Technical Reviewer"){
  //         // teams.payload[r].users.forEach(element => {
  //           for(let f= 0;f<teams.payload[r].users.length;f++){
  //           tech_commitee_clearedproposal = tech_commitee_clearedproposal + "," + teams.payload[r].users[f].name;
  //           tech_commitee_clearedproposal = tech_commitee_clearedproposal.trim();
  //         }
  //       }
  //     }
  //   }
  
     
  var url = 'https://openapi.ariba.com/api/sourcing-project-management/v2/prod/projects/'+project_id;
  var query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=sBh8lruEqVaengu68NvPZgjEnPHhbCdw';
  var basis = 'Basic YTE3MzUzZjMtOTJlNy00NTM3LWI0NzctZmQ2MDVhYmFmN2FiOnBHVDdlZmduczFXOG9ZYUFycDlWQjJ6d0t2UEFhcFJH';
  workerPromises.push(createWorker(url,query,basis));
  url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/scenarios';
  query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN&dataFetchMode=DETAIL';
  basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
  workerPromises.push(createWorker(url,query,basis));
  url = 'https://openapi.ariba.com/api/sourcing-project-management/v2/prod/projects/'+project_id+'/teams';
  query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=sBh8lruEqVaengu68NvPZgjEnPHhbCdw';
  basis = 'Basic YTE3MzUzZjMtOTJlNy00NTM3LWI0NzctZmQ2MDVhYmFmN2FiOnBHVDdlZmduczFXOG9ZYUFycDlWQjJ6d0t2UEFhcFJH';
  workerPromises.push(createWorker(url,query,basis));
  // url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/items/pages/'+pageno;
  // query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
  // basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
  // workerPromises.push(createWorker(url,query,basis));




  }
      // tech_commitee_clearedproposal      

       console.log("stage1")
       console.log(doc_id);

       url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierInvitations';
        query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
       basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
         workerPromises.push(createWorker(url,query,basis));

      //  const thread_results1 = await Promise.all(workerPromises);
      //  var d =  workerPromises;
      //  web_sup_count = thread_results1[0];
       thread_results = await Promise.all(workerPromises);
      
      if(thread_results.length != 0){
       console.log("thread results started")
       thread_results.forEach(async (result)=>{
         if(!Array.isArray(result.payload) && (!(result instanceof Error))  ){
          if("description" in result ){
            proj_desc = result.description;
          }
          // if("sourcingProjectCustomFields" in result){
          //   extfield = result.sourcingProjectCustomFields;
          //   for(let k=0;k<extfield.length;k++){
          //     if(extfield[k].fieldId=="cus_PRDocumentType"){
          //       if("textValue" in extfield[k] ){
          //          ptype1 = extfield[k].textValue;
          //         for(let t=0;t<ptype1.length;t++){
          //           ptype = ptype1[0];
          //           if(ptype !=""){
          //             break;
          //           }
          //         }
          //       }
          //     }
          //     if(ptype !=""){
          //       break;
          //     }
          //   }
            
          // }
          

          if("businessSystem" in result ){
            if("documentCategory" in result.businessSystem){
              if("key" in result.businessSystem.documentCategory[0]){
                ptype = result.businessSystem.documentCategory[0].key;
              }
            }
           
            if("purchasingGroup" in result.businessSystem && result.businessSystem.purchasingGroup.length !=0){
              if( "value" in result.businessSystem.purchasingGroup[0]){
                purchasing_grp = result.businessSystem.purchasingGroup[0].value;
              }
            }  
          }
           
          if("baselineSpend" in result){
            if("amount" in result.baselineSpend ){
              baselinespend = result.baselineSpend.amount;
              // baselinespend = baselinespend.toLocaleString('en-IN');
              baselinespend1 = returnamt(baselinespend);
            }
          }
           
         } else {
           var iden = "eventId";
           var id = "id";
           var item = "itemId";
           var invited = "mainContact"
           if(invited in result.payload[0]){
            var supp = result;
            web_sup_count = supp;
           }
           else if(iden in result.payload[0] && (!(result instanceof Error)) ){
            if(result.payload.length !=0){
              scenarios_payload = result;
              shrt_lst_count = scenarios_payload;
 
              if("selectedSuppliersCount" in result.payload[0] ){
                sup_count = result.payload[0].selectedSuppliersCount;
              }
            }
               
             
 
           }else if(id in result.payload[0] && (!(result instanceof Error))){
             // var d1 = teams;
               tech_commitee_clearedproposal = "";
               if(result.payload.length != 0){
               for(let r=0;r<result.payload.length;r++){
                if("name" in result.payload[r]){
                 if(result.payload[r].name == "Technical Reviewer"){
                   // result.payload[r].users.forEach(element => {
                    if("users" in result.payload[r] && result.payload[r].users.length != 0 ){
                     for(let f= 0;f<result.payload[r].users.length;f++){
                      if("name" in result.payload[r].users[f]){
                        tech_commitee_clearedproposal = tech_commitee_clearedproposal + "," + result.payload[r].users[f].name;
                        tech_commitee_clearedproposal = tech_commitee_clearedproposal.trim();
                      }
                     
                   }
                  }
                 }
                }
               }
             }
   
 
           }
          //  else if(item in result.payload[0] && (!(result instanceof Error))){
          //    const response_data2 = result;
 
          //    if (response_data2.payload.length != 0) {
     
           
          //      for( j = 0; j<response_data2.payload.length;j++){
                
          //        if(response_data2.payload[j].terms.length != 0){
     
          //         if(response_data2.payload[j].title == "Is this for Material/Service/Both?"){
          //           if("terms" in response_data2.payload[j]){
          //             if(response_data2.payload[j].terms.length !=0 &&"value" in response_data2.payload[j].terms[0]){
          //               ser_mate = response_data2.payload[j].terms[0].value.simpleValue; 
          //             }
                     
          //           }
                    
          //         }
                   
          //        if(doc_id == tsk_doc_id){
          //        if(ser_mate == "Material"||ser_mate == "Both"){
          //         if("terms" in response_data2.payload[j] ){
          //           if(response_data2.payload[j].terms.length != 0){
          //        if (response_data2.payload[j].terms[0].title == "Price"){
          //          var terms1 = response_data2.payload[j].terms;
          //          // if (terms1.length != 0){
          //          for(let s=0;s<terms1.length;s++){
          //            if(terms1[s].title == "Requisition ID" ){
          //             if("value" in terms1[s] ){
          //               if("simpleValue" in terms1[s].value ){
          //                 RequisitionID = terms1[s].value.simpleValue;
          //               }
                        
          //             }
                     
          //            }
          //            if(terms1[s].title == "Plant"){
          //             if("value" in terms1[s] ){
          //               if("simpleValue" in terms1[s].value ){
          //               plant = terms1[s].value.simpleValue;
          //               plant_id = plant.split(' ')[0];
          //               plant_name = plant.split(' ').slice(1).join(' ');
          //             }
          //             }
                      
          //            }
          //          }
          //        }
          //       }
          //     }
          //        }
          //        else if(ser_mate == "Service"){
          //         if("terms" in response_data2.payload[j] ){
          //           if(response_data2.payload[j].terms.length !=0){
          //          if (response_data2.payload[j].terms[0].title == "Extended Price"){
                    
          //            var terms1 = response_data2.payload[j].terms;
          //            // if (terms1.length != 0){
          //            for(let s=0;s<terms1.length;s++){
          //              if(terms1[s].title == "Requisition ID" ){
          //               if("value" in terms1[s] ){
          //                 if("simpleValue" in terms1[s].value ){
          //                   RequisitionID = terms1[s].value.simpleValue;
          //                 }
                        
          //               }
          //              }
          //              if(terms1[s].title == "Plant"){
          //               if("value" in terms1[s]){
          //                 if("simpleValue" in terms1[s].value ){
          //                   plant = terms1[s].value.simpleValue;
          //                   plant_id = plant.split(' ')[0];
          //                   plant_name = plant.split(' ').slice(1).join(' ');
          //                 }
                         
          //               }
                         
          //              }
          //            }
          //           }
          //         }
          //          }
          //        }
                 
          //        if (response_data2.payload[j].title == "Subject of Proposal/Order"){ 
          //          // order_currency = response_data2.payload[j].currency.name;
          //         //  itemid = response_data2.payload[j].itemId;
          //          if("currency" in response_data2.payload[j]){
          //           if("name" in response_data2.payload[j].currency){
          //             order_currency = response_data2.payload[j].currency.name;
          //           }
          //          }
          //          if("terms" in response_data2.payload[j]){
          //          if(response_data2.payload[j].terms.length != 0){
          //          for(let s=0;s<response_data2.payload[j].terms.length;s++){
          //              if(response_data2.payload[j].terms[s].title == "Subject of Proposal/Order"){
          //                var value = "value";
          //                if(Object.keys(response_data2.payload[j].terms[s]).includes(value)){
          //                 if("simpleValue" in response_data2.payload[j].terms[s].value ){
          //                   subject_of_proposal = response_data2.payload[j].terms[s].value.simpleValue;
          //                 }
                           
          //               }else{
          //                subject_of_proposal = "";
          //               }
          //              }
     
          //          }
          //        }
          //       }
          //          // if
     
          //        }
          //      }
          //      }
               
     
          //      }
               
                 
                   
     
                  
          //      }
          //      else{
          //        return "no response data from event API ";
          //      }
 
          //  }
             
         }
 
       })
     }
        
     thread_results =[];
     workerPromises = [];
   
     if(doc_id == tsk_doc_id){
     do{

      if(pageno == 3){
        break;
      }

               pageno = pageno + 1;
                getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/items/pages/'+pageno;
                getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
                getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
                const response_data2 = await getcall.tx(req).get('/getcall');



     if (response_data2.payload.length != 0) {
     
           
      for( j = 0; j<response_data2.payload.length;j++){
       
        if(response_data2.payload[j].terms.length != 0){

         if(response_data2.payload[j].title == "Is this for Material/Service/Both?"){
           if("terms" in response_data2.payload[j]){
             if(response_data2.payload[j].terms.length !=0 &&"value" in response_data2.payload[j].terms[0]){
               ser_mate = response_data2.payload[j].terms[0].value.simpleValue; 
             }
            
           }
           
         }
          
        if(doc_id == tsk_doc_id){
        if(ser_mate == "Material"||ser_mate == "Both"){
         if("terms" in response_data2.payload[j] ){
           if(response_data2.payload[j].terms.length != 0){
        if (response_data2.payload[j].terms[0].title == "Price"){
          var terms1 = response_data2.payload[j].terms;
          // if (terms1.length != 0){
          for(let s=0;s<terms1.length;s++){
            if(terms1[s].title == "Requisition ID" ){
             if("value" in terms1[s] ){
               if("simpleValue" in terms1[s].value ){
                 RequisitionID = terms1[s].value.simpleValue;
               }
               
             }
            
            }
            if(terms1[s].title == "Plant"){
             if("value" in terms1[s] ){
               if("simpleValue" in terms1[s].value ){
               plant = terms1[s].value.simpleValue;
               plant_id = plant.split(' ')[0];
               plant_name = plant.split(' ').slice(1).join(' ');
             }
             }
             
            }
          }
        }
       }
     }
        }
        else if(ser_mate == "Service"){
         if("terms" in response_data2.payload[j] ){
           if(response_data2.payload[j].terms.length !=0){
          if (response_data2.payload[j].terms[0].title == "Extended Price"){
           
            var terms1 = response_data2.payload[j].terms;
            // if (terms1.length != 0){
            for(let s=0;s<terms1.length;s++){
              if(terms1[s].title == "Requisition ID" ){
               if("value" in terms1[s] ){
                 if("simpleValue" in terms1[s].value ){
                   RequisitionID = terms1[s].value.simpleValue;
                 }
               
               }
              }
              if(terms1[s].title == "Plant"){
               if("value" in terms1[s]){
                 if("simpleValue" in terms1[s].value ){
                   plant = terms1[s].value.simpleValue;
                   plant_id = plant.split(' ')[0];
                   plant_name = plant.split(' ').slice(1).join(' ');
                 }
                
               }
                
              }
            }
           }
         }
          }
        }
        
        if (response_data2.payload[j].title == "Subject of Proposal/Order"){ 
          // order_currency = response_data2.payload[j].currency.name;
         //  itemid = response_data2.payload[j].itemId;
          if("currency" in response_data2.payload[j]){
           if("name" in response_data2.payload[j].currency){
             order_currency = response_data2.payload[j].currency.name;
           }
          }
          if("terms" in response_data2.payload[j]){
          if(response_data2.payload[j].terms.length != 0){
          for(let s=0;s<response_data2.payload[j].terms.length;s++){
              if(response_data2.payload[j].terms[s].title == "Subject of Proposal/Order"){
                var value = "value";
                if(Object.keys(response_data2.payload[j].terms[s]).includes(value)){
                 if("simpleValue" in response_data2.payload[j].terms[s].value ){
                   subject_of_proposal = response_data2.payload[j].terms[s].value.simpleValue;
                 }
                  
               }else{
                subject_of_proposal = "";
               }
              }

          }
        }
       }
          // if

        }
      }
      }
      

      }
      
        
          

         
      }
    }while(plant==""&& RequisitionID=="")

  }


        //  try{
        //  getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierInvitations';
        //  getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
        //  getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
        //  web_sup_count = await getcall.tx(req).get('/getcall');
        //  }catch(error){

        //   return error;
        //  }
        //  let p = web_sup_count;
        if("payload" in web_sup_count){
         if(web_sup_count.payload.length != 0){
          for(let l = 0;l<web_sup_count.payload.length;l++){
            // if(web_sup_count.payload[l].supplierBidStatus == "Participated"){
              var bid = "hasBid";
              // if(bid in web_sup_count.payload[l] ){
              //   if(web_sup_count.payload[l].hasBid == true){
              pvendor = pvendor + 1;
              supplier.push({
                    supplier_name:web_sup_count.payload[l].invitationId,
                    smvendor_id : web_sup_count.payload[l].organization.smVendorID,
            
                  })
              vendorids.push({
                pvcode : web_sup_count.payload[l].organization.erpVendorID,
                smvendor_id : web_sup_count.payload[l].organization.smVendorID,
                org_name :web_sup_count.payload[l].organization.name,
                // vendor_loc:web_sup_count.payload[l].organization.address.lines[0] +"  "+
                vendor_loc : web_sup_count.payload[l].organization.address.city + " "+web_sup_count.payload[l].organization.address.country ,
              
              })
              vendorids1.push({
                doc_id : doc_id,
                // pvcode : web_sup_count.payload[l].organization.erpVendorID,
                pvcode:web_sup_count.payload[l].organization.smVendorID,
                smvendor_id : web_sup_count.payload[l].organization.smVendorID,
                org_name :web_sup_count.payload[l].organization.name,
                // vendor_loc:web_sup_count.payload[l].organization.address.lines[0] +"  "+
                vendor_loc : web_sup_count.payload[l].organization.address.city + " "+web_sup_count.payload[l].organization.address.country ,
                vinv_id :web_sup_count.payload[l].invitationId, 

              })
            // }
            // }
          }
        }
          else{
            pvendor = 0;
          }
        }
       

          

       
          //GETTING VENDOR DETAILS
            
          if(supplier.length != 0){
          for( let k = 0; k<supplier.length;k++){
           
            // int_id = supplier[k].supplier_name;
            // supplierinvitation.destination.headers.docid = response_data1.document.id;
            // supplierinvitation.destination.headers.inid = supplier[l].supplier_name;
            let sname = supplier[k].supplier_name;
            sname = `${sname}`
            // getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierInvitations/'+sname;
            // getcall.destination.headers.query = 'realm=tataprojects-T&user=VGR&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
            // getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS';
            // const response_data4 = await getcall.tx(req).get('/getcall');
            // if(response_data4 != ""){
            // vendorids.push({
            //   pvcode:`${response_data4.organization.erpVendorID}`,
            //   smvendor_id : `${response_data4.organization.smVendorID}`,
            //   org_name: `${response_data4.organization.name}`
            // })
                 
                // erpVendorID = `${response_data4.organization.erpVendorID}`;
                // vendorname = `${response_data4.organization.name}`;
                // vendor_loc =  `${response_data4.organization.address.lines[0] + response_data4.organization.address.city + response_data4.organization.address.country}`; 

            //  } 
            //  else{
            //    erpVendorID = "      ";
            //    vendorname = "       ";
            //    vendor_loc = "       ";
            //  }
        // GETTING VENDOR RESPONSE DATA

        // supplierbiditem.destination.headers.id = response_data1.document.id;
        // getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierBids/'+int_id;
        // getcall.destination.headers.query = 'dataFetchMode=BASIC&realm=tataprojects-T&user=VGR&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
        // getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS';
        // const supbids = await getcall.tx(req).get('getcall');
        // var c = supbids;

        
        number_of_vendors = number_of_vendors + 1;
        if(vendorids.length != 0){
          var vendorid = vendorids[k].smvendor_id;
          // var pvcode =  vendorids[k].pvcode;
          var pvcode = vendorids[k].smvendor_id;
          var smid = vendorids[k].smvendor_id;
        }else{
          var vendorid = "";
          var pvcode = "";
        }
        
        // let vendorid = "S65873336";
    
       // GETTING CE DETAILS

      //   getcall.destination.headers.url = 'https://openapi.ariba.com/api/supplierdatapagination/v4/prod/vendors/'+vendorid+'/workspaces/questionnaires';
      //   getcall.destination.headers.query = 'realm=tataprojects-T&user=VGR&passwordAdapter='+password+'&dataFetchMode=detail&apikey=Dn92XBUT3MCNOedJG3aSKhU8QqkD4FRM';
      //   getcall.destination.headers.basis = 'Basic M2I4MmJkYzMtOTQzZi00NWRiLWJjYjYtNGZkYTc5MzkxODExOjFYdFIwOTJTZndQY3RaakUwejU3NGg2Q0F6Y1VqeVRM';
      //   const sup_ce_details = await getcall.tx(req).get('getcall');
      //   var rs = sup_ce_details;
      //    if(sup_ce_details.length != 0){
      //   if(sup_ce_details._embedded.questionnaireList.length != 0){
      //     for(let c=0;c<sup_ce_details._embedded.questionnaireList.length;c++){
      //       var title = sup_ce_details._embedded.questionnaireList[c].questionnaire.title;
      //       title = title.substring(0, 3);
      //         if(title == "CE_"){
      //           var qna_id = sup_ce_details._embedded.questionnaireList[c].questionnaire.questionnaireId;
      //           getcall.destination.headers.url = 'https://openapi.ariba.com/api/supplierdatapagination/v4/prod/vendors/'+vendorid+'/workspaces/questionnaires/'+qna_id+'/qna';
      //           getcall.destination.headers.query = 'realm=tataprojects-T&apikey=Dn92XBUT3MCNOedJG3aSKhU8QqkD4FRM';
      //           getcall.destination.headers.basis = 'Basic M2I4MmJkYzMtOTQzZi00NWRiLWJjYjYtNGZkYTc5MzkxODExOjFYdFIwOTJTZndQY3RaakUwejU3NGg2Q0F6Y1VqeVRM';
      //           const sup_ce_scores = await getcall.tx(req).get('getcall');
                
      //         }
      //     }
      //   }
      // }else{
      //   console.log("NO questonnaries are there for this supplier")
      // }

        

        //GETTING SUPPLIER INFORMATION LIKE LOC,GST,CE SCORE
        console.log("stage2")
        var ven_ind = 0;
        var ven_ind1 = 0
        // if(pan_vendor_response.length != 0){
        //   for(let v=0;v<pan_vendor_response.length;v++){
        //     // ven_ind = 0;
        //     if(pan_vendor_response[v].Proposed_Vendor_Code == pvcode){
        //        ven_ind = 1;
        //        GstNo = pan_vendor_response[v].Vendor_GST_Number;
        //        cescore = pan_vendor_response[v].Vendor_CE_Score;
        //        region1 = pan_vendor_response[v].Supplier_Origin_State;
        //        sup_main_add = pan_vendor_response[v].Destination_State_BKTShipDASHto_LocationBKT;
        //        supplier_contact1 = pan_vendor_response[v].Vendor_Contact_PersonDASH1;


        //     }
        //     // else{
        //     //   ven_ind1 = 1;
        //     // }
        //   }
        // }
        
        url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierBids/'+sname;
        query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN&bidHistory=True&dataFetchMode=BASIC';
        basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS';
        workerPromises.push(createWorker(url,query,basis));
        url = 'https://openapi.ariba.com/api/supplierdatapagination/v4/prod//vendors/'+vendorid+'/workspaces/questionnaires/qna';
        query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter=&dataFetchMode=detail&apikey=Dn92XBUT3MCNOedJG3aSKhU8QqkD4FRM';
        basis = 'Basic M2I4MmJkYzMtOTQzZi00NWRiLWJjYjYtNGZkYTc5MzkxODExOjFYdFIwOTJTZndQY3RaakUwejU3NGg2Q0F6Y1VqeVRM';
        workerPromises.push(createWorker(url,query,basis));

        var supplierdata ="";
        var response_data4="";
        var error = "Error";
   
       var  thread_results1 = await Promise.all(workerPromises);
       var d = thread_results1;
       if(thread_results1.length !=0){
      //   thread_results1.forEach((res)=>{
      //     if(!Array.isArray(res.payload)){
      //       supplierdata = res;
      //     }else{
      //         response_data4 = res;
      //     }
          
      //   })
      
      for(let t=0;t<thread_results1.length;t++){
        // if("Error" in thread_results1[t].payload){
        //   continue;
        // }
         if( !Array.isArray(thread_results1[t].payload) && (!(thread_results1[t] instanceof Error))  ){
            // if (!(thread_results1[t] instanceof Error)){
              supplierdata = thread_results1[t];
            // }
                
              }else if(Array.isArray(thread_results1[t].payload) && (!(thread_results1[t] instanceof Error))){
                  response_data4 = thread_results1[t];
              }
      }
       }

       thread_results1 =[];
       workerPromises=[];  

        // if(ven_ind == 0 ){
        
        //   try{
        // getcall.destination.headers.url = 'https://openapi.ariba.com/api/supplierdatapagination/v4/prod//vendors/'+vendorid+'/workspaces/questionnaires/qna';
        // getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter=&dataFetchMode=detail&apikey=Dn92XBUT3MCNOedJG3aSKhU8QqkD4FRM';
        // getcall.destination.headers.basis = 'Basic M2I4MmJkYzMtOTQzZi00NWRiLWJjYjYtNGZkYTc5MzkxODExOjFYdFIwOTJTZndQY3RaakUwejU3NGg2Q0F6Y1VqeVRM';
        //  supplierdata = await getcall.tx(req).get('/getcall');
        //   }catch(error){
        //     return error;
        //   }
        let d2 = supplierdata;
        if (supplierdata != ''){
          if("_embedded" in supplierdata && "questionAnswerList" in supplierdata._embedded){
          for(let h = 0;h<supplierdata._embedded.questionAnswerList.length;h++){
            if("questionAnswer" in supplierdata._embedded.questionAnswerList[h] && "questionLabel" in supplierdata._embedded.questionAnswerList[h].questionAnswer){
              if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "GST Number"){
                GstNo = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;

              }
              if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "(Technical) CE Eligibility Yes"){
                cescore = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
              }

              if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Supplier Main Address"){
                sup_main_add = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
                var streetName="";
                var  houseID = " ";
                var city="";
                var postalCode="";
                var region="";
                var country="";
                const parsedData = JSON.parse(sup_main_add);
                if("streetName" in parsedData.default ){
                 streetName = parsedData.default.streetName || '';
                }
                if("houseID" in parsedData.default ){
                  houseID = parsedData.default.houseID || '';
                }
                 if("cityName" in parsedData.default ){
                  city = parsedData.default.cityName || '';
                 }
                if("streetPostalCode" in parsedData.default ){
                  postalCode = parsedData.default.streetPostalCode || '';
                }
                if("regionCode" in parsedData.default ){
                  if("Name" in parsedData.default.regionCode ){
                    region = parsedData.default.regionCode.Name || '';
                    region1 = region;
                  }
                }
               
                if("countryCode" in parsedData.default){
                  if("Name" in parsedData.default.countryCode ){
                    country = parsedData.default.countryCode.Name || '';
                   }
                }
                 
                
                
                
                var formattedAddress = `${streetName}, ${houseID}, ${city}, ${postalCode}, ${country}`;
                let resultArray = formattedAddress.split(',').map(item => item.trim()).filter(Boolean);
                 sup_main_add = resultArray.join(', ');
                
                // console.log(formattedAddress);
              }

             if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Contact First Name"){
                first_name = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
             }
             if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Contact Last Name"){
               last_name  = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
             }
             if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Contact Email"){
                email = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
             }
             if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Mobile Phone"){
               mobile_phone = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
             }
             if(supplierdata._embedded.questionAnswerList[h].questionAnswer.questionLabel == "Contact Phone"){
              contact_phone = supplierdata._embedded.questionAnswerList[h].questionAnswer.answer;
             }
            } 
             
          }

          supplier_contact1 =   first_name + " " + last_name ;
          // + " " +email + " " +mobile_phone+" "+"ph2 :"+contact_phone;
        }
      }

      supplierdata ='';
      
      //  try{
      //   getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierBids/'+sname;
      //   getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN&bidHistory=True&dataFetchMode=BASIC';
      //   getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS';
      //    response_data4 = await getcall.tx(req).get('/getcall');
      //  }catch(e){
      //   // return e;
      //    continue;
        
      //  }
      
        
        // var d = response_data4;
       if(response_data4 !=[]){
        if(response_data4.payload.length != 0){
          for(let j=0;j<response_data4.payload.length;j++){
            if ((Array.isArray(response_data4.payload[j].item.terms))&&(response_data4.payload[j].item.terms.length != 0)) {
              var terms5 = response_data4.payload[j].item.terms;
              for(let t=0;t<terms5.length;t++){
                if(terms5[t].title == "Is this for Material/Service/Both?"){
                  ser_mate = terms5[t].value.simpleValue;
                }
              }
            }
          }
        }
      }


       
        
       

      //   if(ser_mate == "Material"||ser_mate == "Both"){
      //   var inviid ;
      //   var alterid;
      //   var flag3 = 0;
      //   if(response_data4 != []){
      //   if(response_data4.payload.length != 0){
      //   for(let v = 0;v<response_data4.payload.length;v++){
      //     // var vcount = vcount + 
      //     if ((Array.isArray(response_data4.payload[v].item.terms))&&(response_data4.payload[v].item.terms.length != 0)) {
      //     if(response_data4.payload[v].item.terms[0].title == "Price"){
      //        subdate = response_data4.payload[v].submissionDate;
      //       var inv_id = 
      //        terms2 = response_data4.payload[v].item.terms;

          
      //         // venador_names.push({
      //         //   vname :response_data4.payload[v].invitationId,doc_id});
      //       // if(!(inviid)){
      //       //   inviid=response_data4.payload[v].incitationId;
      //       //   alterid = response_data4.payload[v].alternativeId;
      //       // }
      //       // if((inviid==response_data4.payload[v].incitationId)&&(alterid==response_data4.payload[v].alternativeId)){
      //         if(flag3 == 0){
      //           flag3 = 1;
      //         if(terms2.length != 0){
      //           for(let t =0;t<terms2.length;t++){
      //             if(terms2[t].title == "Total Cost"){
      //              lamount = lamount + terms2[t].value.moneyValue.amount;
     
      //              var unit = terms2[t].value.supplierValue.currency;
                 
      //             }
      //           }
      //        }
           

      //       }
      //       else if((alterid ==response_data4.payload[v].alternativeId)){
      //         // l1Amount = 0;
      //         if(terms2.length != 0){
      //           for(let t =0;t<terms2.length;t++){
      //             if(terms2[t].title == "Total Cost"){
      //              lamount = lamount + terms2[t].value.moneyValue.amount;
     
      //              var unit = terms2[t].value.supplierValue.currency;
                 
      //             }
      //           }
      //        }
            
      //       }
      //       web_tab2.push({
      //         submissionDate : subdate,
      //         amount : lamount,
      //         doc_id : doc_id,
      //         unit : unit,
      //         smid : supplier[k].smvendor_id,
      //         // smid : vendorids[k].smvendor_id,
      //         type : icon_type,
      //       })
      //       web_tab1_amt.push(lamount);
      //       flag3 = 0;
      //       lamount = 0;
         
      //       alterid = response_data4.payload[v].alternativeId;
        
      //     }
       
      //       terms2=[];
      //     }
      //   }
      // }
      // }
      // console.log("stage1.1");
      // }

      
     
      // else if(ser_mate == "Service"){
      //   if(response_data4.payload.length != 0){

      //  for(let i = 0;i<response_data4.payload.length;i++){
      //   if(response_data4.payload[i].item.title == "Pricing"){
      //     for(let k1 = 0;k1<response_data4.payload[i].item.rollUpTerms.length;k1++){
      //       if(response_data4.payload[i].item.rollUpTerms[k1].title == "Extended Price"){
      //         var subdate = response_data4.payload[i].submissionDate;
      //         var invite_id = response_data4.payload[i].invitationId;

      //         venador_names.push({
      //           vname :response_data4.payload[i].invitationId,doc_id});

      //         var value2 = "value";
      //         if(Object.keys(response_data4.payload[i].item.rollUpTerms[k1]).includes(value2)){
      //           ex_price = response_data4.payload[i].item.rollUpTerms[k1].value.moneyValue.amount;
                
               
      //         }
      //         if(invite_id == supplier[k].supplier_name&&ex_price != 0){
      //           ex_price1.push(ex_price);
      //             web_tab2.push({
      //               submissionDate : subdate,
      //               amount : ex_price,
      //               doc_id : doc_id,
      //               unit : unit,
      //               smid : supplier[k].smvendor_id,
      //               // smid : vendorids[k].smvendor_id,
      //               type : icon_type,
      //             })
      //             ex_price =0;

      //       }
            
      //       }
      //     }
      //   }

      //  }
         
       
      // }
       
      // }
      

        
        // console.log("responsedata3");

        
        // debugger

          
          // getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/Doc1007341724/items';
          // getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
          // getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
          // const items = await getcall.tx(req).get('/getcall');
        
        // getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+doc_id+'/supplierBids/'+sname;
        // getcall.destination.headers.query = 'realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN&dataFetchMode=BASIC';
        // getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS';
        // const response_data3 = await getcall.tx(req).get('getcall');
        // var r= response_data3;


          if(response_data4 != []){
          if (response_data4.payload.length != 0){
            eventNo = 0;
          

            for(let k2 = 0;k2<response_data4.payload.length;k2++){
              if("invitationId" in response_data4.payload[k2]){
                venador_names.push({
                  vname :response_data4.payload[k2].invitationId,doc_id});
              }
               if("bidStatus" in response_data4.payload[k2] ){
                if(response_data4.payload[k2].bidStatus == "Accepted"){
                  if("invitationId" in response_data4.payload[k2]){
                   ainv_id = response_data4.payload[k2].invitationId;
                  }
                  // let b = response_data4.payload[k2].item.itemId;
                  if("submissionDate" in response_data4.payload[k2]){
                  var pay_date = response_data4.payload[k2].submissionDate;
                  pay_date = pay_date.substring(0, 10);

                  pay_date = returndate(pay_date);
                  }
                   
                  if( response_data4.payload[k2].item.title == "Payment Method" ) {
                    if("terms" in response_data4.payload[k2].item && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                        payment_type = response_data4.payload[k2].item.terms[0].value.simpleValue;
                        payment_type = payment_type.toString();
                      }
                     
                   }
                  }
                    }

                    if( response_data4.payload[k2].item.title == "Technical Review Rank" ) {
                      if("terms" in response_data4.payload[k2].item && response_data4.payload[k2].item.terms.length !=0){
                      if("value" in response_data4.payload[k2].item.terms[0] ){
                        if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                          tech_app = response_data4.payload[k2].item.terms[0].value.simpleValue;
                          
                        }
                       
                     }
                    }
                      }

                      if( response_data4.payload[k2].item.title == "Technical Review Acceptance" ) {
                        if("terms" in response_data4.payload[k2].item && response_data4.payload[k2].item.terms.length !=0){
                        if("value" in response_data4.payload[k2].item.terms[0] ){
                          if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                            tech_acc = response_data4.payload[k2].item.terms[0].value.simpleValue;
                            if(tech_acc == "false"){
                              tech_acc = "No";
                            }else if(tech_acc == "true"){
                              tech_acc = "Yes";
                            }
                            
                          }
                         
                       }
                      }
                        }
                     
                  if( response_data4.payload[k2].item.title == "Totals" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                      total_terms = response_data4.payload[k2].item.terms;
                      for(let k=0;k<total_terms.length;k++){
                        if(total_terms[k].fieldId == "TOTALCOST" || total_terms[k].title == "Total Cost" ){
                        if("value" in total_terms[k] ){
                          if("supplierValue" in total_terms[k].value ){
                            if("amount" in total_terms[k].value.supplierValue ){
                              vfinal_quote = total_terms[k].value.supplierValue.amount;
                              // vfinal_quote = vfinal_quote.toString();
                              acc_subdate = response_data4.payload[k2].submissionDate;
                            }
                          }
                       
                          }
                        }
                      }
                      
                    }
                    // acc_subdate = response_data4.payload[k2].submissionDate;
                }

                   if( response_data4.payload[k2].item.title == "Progress"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                       progress = response_data4.payload[k2];
                       if("simpleValue" in progress.item.terms[0].value ){
                        progress = progress.item.terms[0].value.simpleValue;
                        progress = progress.toString();
                       }
                        
                    }
                  }
                  }

                  if( response_data4.payload[k2].item.title == "Percentage Payment for Progress"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("bigDecimalValue" in response_data4.payload[k2].item.terms[0].value){
                        per_pay_pro = response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                        per_pay_pro = per_pay_pro.toString() + "%";
                      }
                   
                    }
                  }
                  }

                  if(response_data4.payload[k2].item.title == "Percentage Payment for Retention"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("bigDecimalValue" in response_data4.payload[k2].item.terms[0].value){
                    per_pay_ret = response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                    per_pay_ret = per_pay_ret.toString() + "%";
                      }
                    }
                  }
                  }

                  if( response_data4.payload[k2].item.title == "Advance"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in  response_data4.payload[k2].item.terms[0].value){
                        Advance = response_data4.payload[k2].item.terms[0].value.simpleValue;
                        Advance = Advance.toString();
                      }
                    
                    }
                  }
                  }

                  if( response_data4.payload[k2].item.title == "Down Payment Percentage"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("bigDecimalValue" in  response_data4.payload[k2].item.terms[0].value){
                        Advance_per = response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                        Advance_per = Advance_per + " %";
                      }
                    
                    }
                  }
                  }

                   if( response_data4.payload[k2].item.title == "Mandatory Documents /Submissions for Progress" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                    if("simpleValues" in response_data4.payload[k2].item.terms[0].value ){
                    if (Array.isArray(response_data4.payload[k2].item.terms[0].value.simpleValues)) {
                      var res = response_data4.payload[k2].item.terms[0].value;
                    
                      for(let es = 0;es<res.simpleValues.length;es++){
                        progress_documents = res.simpleValues[es] +" ,"+ progress_documents;
                      }
                        progress_documents = progress_documents.trim();
                      }
                     } else if("simpleValue" in response_data4.payload[k2].item.terms[0].value ) {
                       progress_documents = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                    }
                  }
                 
                  }

                  if(response_data4.payload[k2].item.title == "Mandatory Documents /Submissions for Retention" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                   if("simpleValues" in response_data4.payload[k2].item.terms[0].value ){
                    if (Array.isArray(response_data4.payload[k2].item.terms[0].value.simpleValues)) {
                      var res1 = response_data4.payload[k2].item.terms[0].value;
                     
                      for(let es = 0;es<res1.simpleValues.length;es++){
                        retention_documents = res1.simpleValues[es] +", "+retention_documents;
                        
                      }
                      
                      retention_documents = retention_documents.trim();
                      } 
                    }else if("simpleValue" in response_data4.payload[k2].item.terms[0].value) {
                        retention_documents = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                    }
                  }
                    
                  }


                   if( response_data4.payload[k2].item.title == "To be certified in Company by for Progress"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                        by = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                      
                    }
                  }
                   
                  }
                   
                  if( response_data4.payload[k2].item.title == "To be certified in Company by for Retention"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simplrValue" in response_data4.payload[k2].item.terms[0].value){
                        by1 = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                   
                    }
                  }
                   }

                   if( response_data4.payload[k2].item.title == "Retention Due Date"){
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("dateValue" in response_data4.payload[k2].item.terms[0] ){
                        due_date = response_data4.payload[k2].item.terms[0].value.dateValue;
                        due_date = due_date.substring(0, 10);
                        due_date = returndate(due_date);
                      }
                    
                    }
                  }
                   

                }

                   if(response_data4.payload[k2].item.title == "Retention" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value ){
                        retention = response_data4.payload[k2].item.terms[0].value.simpleValue;
                        retention = retention.toString();
                      }
                    
                    }
                  }
                  }
                   if(response_data4.payload[k2].item.title == "Percentage Total" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                     if("bigDecimalValue" in response_data4.payload[k2].item.terms[0].value ){
                      var percentage = response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                      percentage1 = percentage.toString();
                     } 
                   
                    }
                  }
              }

                   //Terms and conditions to be compared with
                   if(ser_mate == "Material" || ser_mate == "Both"){
                    inc = response_data4.payload[k2].item.title;
                    inc = inc.substring(0,9);
                    
                     if(inc == "IncoTerms" ){
                      if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                      if("value" in response_data4.payload[k2].item.terms[0] ){
                        if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                          inco_terms = response_data4.payload[k2].item.terms[0].value.simpleValue;
                          inco_terms = inco_terms.toString();
                        }
                       
                      }
                     }
                    }
                  }

                    if(ser_mate == "Service"){
                    //   if(   response_data4.payload[k2].item.title == "IncoTerms" ){
                    //     inco_terms = response_data4.payload[k2].item.terms[0].value.simpleValue;
                    //      inco_terms = inco_terms.toString();
                    // }
                    inc = response_data4.payload[k2].item.title;
                    inc = inc.substring(0,9);
                    
                     if(inc == "IncoTerms" ){
                      if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                      if("value" in response_data4.payload[k2].item.terms[0] ){
                        if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                      inco_terms = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      inco_terms = inco_terms.toString();
                        }
                      }
                    }
                    }
                }

                  if(response_data4.payload[k2].item.title == "ABG (Advance Bank Guarantee)" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("bigDecimalValue" in response_data4.payload[k2].item.terms[0].value){
                        abg = response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                        abg = abg.toString();
                        abg = abg + " %"
                    }
                  }
                  }
                    }
                  if(   response_data4.payload[k2].item.title == "CPBG (Contract Performance Bank Guarantee)" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("bigDecimalValue" in response_data4.payload[k2].item.terms[0].value){
                       cpbg= response_data4.payload[k2].item.terms[0].value.bigDecimalValue;
                      cpbg = cpbg.toString();
                      cpbg = cpbg + " %"
                      }
                    }
                  }
                    }

                 //other terms and conditions
                  if(   response_data4.payload[k2].item.title == "Scope and Responsibilities" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                       ScopeandResponsibilities = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      ScopeandResponsibilities = ScopeandResponsibilities.toString();
                      }
                    }
                  }
                 }
                  if(   response_data4.payload[k2].item.title == "Commercial Terms" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                       CommercialTerms = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                    }
                  }
                  } 
                 if(response_data4.payload[k2].item.title == "Compliance Terms" ) {
                  if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                  if("value" in response_data4.payload[k2].item.terms[0] ){
                    if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                       ComplianceTerms = response_data4.payload[k2].item.terms[0].value.simpleValue;
                    }
                  }
                  }
                  } 
                  if(   response_data4.payload[k2].item.title == "Others" ) {
                    if("terms" in response_data4.payload[k2].item  && response_data4.payload[k2].item.terms.length !=0){
                    if("value" in response_data4.payload[k2].item.terms[0] ){
                      if("simpleValue" in response_data4.payload[k2].item.terms[0].value){
                        Others = response_data4.payload[k2].item.terms[0].value.simpleValue;
                      }
                       
                    } 
                  }
                } 
                
                //price details
                if(response_data4.payload[k2].item.title == "Totals"){
                  if("itemsWithBid" in response_data4.payload[k2] && response_data4.payload[k2].itemsWithBid.length !=0 ){
                  for(let v = 0;v<response_data4.payload[k2].itemsWithBid.length;v++ ){
                    material_items.push({
                      itemid : response_data4.payload[k2].itemsWithBid[v],
                    }) 
                  }
                }

                  console.log("stage2.1")
             
                if(ser_mate == "Material"||ser_mate == "Both"){
                if(material_items.length != 0){
                  for(let b = 0 ;b<material_items.length;b++){
                    // response_data4.payload.forEach(e => {
                      for(let a = 0;a<response_data4.payload.length;a++){
                        // var invt_id = response_data4.payload[a].invitationId;
                      // if(e.itemId == material_items[b].itemid && e.internalId == sname){
                        if( response_data4.payload[a].itemId == material_items[b].itemid){
                          if("bidStatus" in response_data4.payload[k2]){
                          if(response_data4.payload[k2].bidStatus == "Accepted"){
                            if("item" in response_data4.payload[a]){
                              if("title" in response_data4.payload[a].item){
                                ItemShortDescription = response_data4.payload[a].item.title;
                              }
                            }
                          
                          if("terms" in response_data4.payload[a].item && response_data4.payload[a].item.terms.length != 0 ){
                        let terms = response_data4.payload[a].item.terms;
                          if(terms.length != 0){
                             var value1 = "value";
                           for(let m= 0;m<terms.length;m++){
                               if(terms[m].title =="SACCode"){
                                if(Object.keys(terms[m]).includes(value1)){
                                   SACCode = terms[m].value.simpleValue;
                                }else{
                                  SACCode = "";
                                }
                              }
                                
                                
                                if(terms[m].title == "Material Code"){
                                if(Object.keys(terms[m]).includes(value1)){
                                ItemCode = terms[m].value.simpleValue;
                                let match = ItemCode.match(/^\d+/); 
                                let output = match ? match[0] : null;
                                ItemCode = output;
                                }else{
                                  ItemCode = "";
                                }
                                }
                               
         
                                if(terms[m].title =="Quantity"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                   UOM = terms[m].value.quantityValue.unitOfMeasureName;
                                   Quantity = terms[m].value.quantityValue.amount;
                                   Quantity = Quantity.toLocaleString('en-US');
                                  }else{
                                    Quantity = "";
                                  }
                                }

                                if(terms[m].title =="Freight"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                    Freight = terms[m].value.moneyValue.amount;
                                   
                                  }else{
                                    Freight = "";
                                  }
                                }


                                if(terms[m].title == "Total Cost"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                  l1Amount = l1Amount +  terms[m].value.moneyValue.amount;
                                  bid_currency = terms[m].value.supplierValue.currency;
                                   l3Amount = terms[m].value.moneyValue.amount;
                                   l4Amount = returnamt(l3Amount);
                                  
                                  }else{
                                    l1Amount = 0;
                                    bid_currency = "";
                                    l3Amount = 0;
                                  }
                                }
                                
        
                                if(terms[m].title =="Price"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                   UnitPrice = terms[m].value.moneyValue.currency;
                                   Amount = terms[m].value.moneyValue.amount;
                                   if(UnitPrice == "INR"){
                                   Amount = Amount.toLocaleString('en-IN');
                                   }
                                   if(UnitPrice == "USD"){
                                    Amount = Amount.toLocaleString('en-US');   
                                   }
                                  }
                                  else{
                                    UnitPrice = "";
                                    Amount = "";

                                  }
                                }

                                if(terms[m].title =="Extended Price"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                  extend_price = terms[m].value.moneyValue.amount;
                                  extend_price = returnamt(extend_price);
                                  }
                                  else{
                                    extend_price= "";                              
                                  }
                                }
                                
                                if(terms[m].title == "Delivery Schedule - Quantity"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                    delivery_schedule = terms[m].value.simpleValue;
                                  }
                                  else{
                                    delivery_schedule = "";
                                  }
                                }
        
                                if(terms[m].title == "Delivery Schedule - Date"){
                                  if(Object.keys(terms[m]).includes(value1)){
                               
                                    delivery_schedule1 = terms[m].value.simpleValue;
                                    if(delivery_schedule != ""){
                                      delivery_schedule = delivery_schedule + " " + delivery_schedule1;
                                    }
                                    
                                  }
                                  else{
                                    delivery_schedule = ""
                                  }
                               
                                }

                                if(terms[m].title == "Quantity Over Delivery Tolerance"){
                                 
                               
                                    if(Object.keys(terms[m]).includes(value1)){
                                      tolerence = terms[m].value.simpleValue;
                                    }else{
                                      tolerence = ""
                                    }
                             
                                 }
                              //    if(terms[m].title == "Requisition ID"){
                                 
                               
                              //     if(Object.keys(terms[m]).includes(value1)){
                              //       RequisitionID = terms[m].value.simpleValue;
                              //     }else{
                              //       RequisitionID = ""
                              //     }
                           
                              //  }
                            //    if(terms[m].title == "Plant"){
                                 
                               
                            //     if(Object.keys(terms[m]).includes(value1)){
                            //       plant = terms[m].value.simpleValue;
                            //       plant_id = plant.split(' ')[0];
                            //       plant_name = plant.split(' ').slice(1).join(' ');
                            //     }else{
                            //       plant = "";
                            //       plant_id = "";
                            //       plant_name = "";
                            //     }
                         
                            //  }
                          //    if(terms[m].title == "Subject of Proposal/Order"){
                                 
                               
                          //     if(Object.keys(terms[m]).includes(value1)){
                          //       subject_of_proposal = terms[m].value.simpleValue;
                          //     }else{
                          //       tolerence = ""
                          //     }
                       
                          //  }
        
        
                                if(terms[m].title == "Delivery Date"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                   var date_obj =   terms[m].value.dateValue;
                                    date_obj = new Date(date_obj);
                                    delivery_date = date_obj.toISOString().split('T')[0];
                                    delivery_date = returndate(delivery_date);
                                  }else{
                                    delivery_date = ""
                                  }
                                  
                                  // var input = new Date(delivery_date);
        
                                  // // Define the days of the week and months
                                  // var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                                  // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
                                  // // Extract day of the week, day, month, and year
                                  // var dayOfWeek = daysOfWeek[input.getUTCDay()];
                                  // var day = input.getUTCDate();
                                  // var month = months[input.getUTCMonth()];
                                  // var year = input.getUTCFullYear();
        
                                  // // Format the date string
                                  //  delivery_date = `${dayOfWeek}, ${day} ${month}, ${year}`;
        
                                  // console.log(formattedDate);
        
                                }
                               
        
                                if(terms[m].title =="Tax"){
                                  if(Object.keys(terms[m]).includes(value1)){
                                   IndianTaxPER = terms[m].value.simpleValue;
                                  }else{
                                    IndianTaxPER = "";
                                  }
                                }
                               
        
                               
                               
                              }
                            }
                          }
                          }
                        }
                      }
                    }

             
                if(doc_id != tsk_doc_id){

                price_details.push({
                  Proposed_Vendor_Code                                                         : `${pvcode}`, 
                  PAN_Number                                                                   : `${doc_id}`,
                  Item_Code                                                                    : `${ItemCode}`,
                  Proposed_Vendor_Code                                                         :`${pvcode}` ,
                  PAN_Number                                                                   : `${doc_id}`,
                  HSN_OR_SAC_Code                                                              : `${SACCode}`,
                  Item_Short_Description                                                       : `${ItemShortDescription}`,
                  UOM                                                                          : `${UOM}`,
                  Quantity                                                                     : `${Quantity}`,
                  Unit_Price                                                                   : `${Amount}`,
                  Amount                                                                       : `${l4Amount}`,
                  extendedPrice                                                                : `${extend_price}`,
                  Indian_Tax_PER                                                               : `${IndianTaxPER}`,
                  Quantity_Over_Delivery_Tolerance                                             : `${tolerence}`,
        
               })
              }
                 
                  vendortaxdetails.push({
                        Proposed_Vendor_Code : `${pvcode}`, 
                        PAN_Number : `${doc_id}`,
                        Item_Code : `${ItemCode}`,
                        name :"Freight",
                        value :`${Freight}`,
                  })
      

            

                   price_details1.push({
                    Proposed_Vendor_Code : `${pvcode}`,
                     PAN_Number : `${doc_id}`,
                     item_name : `${ItemShortDescription}`,
                     inv_id : `${sname}` ,
                     amount : `${l3Amount}`,
                   })

                   SACCode="";
                   ItemCode="";
                   ItemShortDescription="";
                   UOM="";
                   Quantity="";
                   Amount="";
                   l4Amount="";
                   extend_price="";
                   IndianTaxPER="";
                   tolerence="";
                 

                    l3Amount = 0;
                  
                  }
                  material_items = [];
                  l1amount.push(
                    l1Amount,
                 ) 
                 l2Amount = l1Amount;
                 l2Amount = returnamt(l2Amount);
                 l1Amount = 0;


                

                }
               
              }
                
               }
              }
              else if(response_data4.payload[k2].bidStatus == "Replaced" ){
              //  if(response_data4.payload[k2].bidStatus == "Replaced" || response_data4.payload[k2].bidStatus == "Accepted" || response_data4.payload[k2].bidStatus == "Archived" ){
                var value3="value";
                var roll = "rollUpTerms";
                var roll1 = "terms"
                var vc=0;
                if( response_data4.payload[k2].item.title == "Pricing" ) {
                  // if()
                  if(Object.keys(response_data4.payload[k2].item).includes(roll)){
                  if(response_data4.payload[k2].item.rollUpTerms.length !=0){
                    if(Object.keys(response_data4.payload[k2].item.rollUpTerms[0]).includes(value3)){
                      console.log("version")
                      if(response_data4.payload[k2].item.rollUpTerms.length != 0){
                        for(r=0;r<response_data4.payload[k2].item.rollUpTerms.length;r++){
                          if(response_data4.payload[k2].item.rollUpTerms[r].title == "Total Cost" ){
                            if("value" in response_data4.payload[k2].item.rollUpTerms[r]){
                              if("moneyValue" in response_data4.payload[k2].item.rollUpTerms[r].value){
                                if("amount" in response_data4.payload[k2].item.rollUpTerms[r].value.moneyValue){
                                  v1amt = response_data4.payload[k2].item.rollUpTerms[r].value.moneyValue.amount;
                                }
                              }
                            }
                            
                          }
                        }
                      }
                      
                       
                      //  v1sup_count.push({vname : response_data4.payload[k2].invitationId})
                       version1.push({
                        PAN_Number : doc_id ,
                        Proposed_vendor_code:pvcode ,
                        final_quote :v1amt ,
                        sub_date :response_data4.payload[k2].submissionDate,
                        inv_id : response_data4.payload[k2].invitationId,
                        vcount : vc,
                        sm_id:smid,
                        type :icon_type,
                        
                      })
                      var sdate = response_data4.payload[k2].submissionDate;
                      sdate = sdate.substring(0,10);

                      eventNo = eventNo + 1;
                      // web_event.push({
                      //   idd : `${eventNo}` ,
                      //   PAN_Number :`${tsk_doc_id}`,
                      //   eventNo : `${"V"+eventNo}`,
                      //   number:`${doc_id}`,
                      //   date:`${sdate}`,
                      //   numberOfVendorsParticipated :`${supplier.length}`,
                      //   l1AmountObtained :`${v1amt}`,
                      //   status : `${response_data4.payload[k2].bidStatus}`

                      // })
                    }
                  }
                }
                // else if(Object.keys(response_data4.payload[k2].item).includes(roll1) && response_data4.payload[k2].item.terms.length != 0){
                //   console.log("terms")

                // }
                 
                  // v1amt = v1amt.toString();

                 
              }


             

              }
            }
               
               }

          
        }
      }
        response_data4=[]
              
              console.log("stage3")


            payment_details.push({
              "slNo"                                                :1,
              "Proposed_Vendor_Code"                               :`${pvcode}`,
              "PAN_Number"                                         :`${doc_id}`,
              "iddd"                                               : "Advance",
              "Payment_methord"                                    : `${payment_type}`,
              "Percentage"                                         : `${Advance_per}`,
              "Description"                                        : `${Advance}`,
              "Due_date"                                           :  `${due_date}`,
              "Mandatory_Documents_OR_Submissions"                  : "",
              "To_be_certified_in_Company"                          : "",

          })
              payment_details.push({
                "slNo"                                               :2,
                "Proposed_Vendor_Code"                               :`${pvcode}`,
                "PAN_Number"                                         :`${doc_id}`,
                "iddd"                                               : "Progress",
                "Payment_methord"                                    : `${payment_type}`,
                "Percentage"                                         : `${per_pay_pro}`,
                "Description"                                        : `${progress}`,
                "Due_date"                                           :  `${due_date}`,
                "Mandatory_Documents_OR_Submissions"                  : `${progress_documents}`,
                "To_be_certified_in_Company"                          : `${by}`
            })
                payment_details.push({
                  "slNo"                                               :3,
                  "Proposed_Vendor_Code"                               :`${pvcode}`,
                  "PAN_Number"                                         :`${doc_id}`,
                  "iddd"                                               : "Retention",
                  "Payment_methord"                                    : `${payment_type}`,
                  "Percentage"                                         : `${per_pay_ret}`,
                  "Description"                                        : `${retention}`,
                  "Due_date"                                           :  `${due_date}`,
                  "Mandatory_Documents_OR_Submissions"                  : `${retention_documents}`,
                  "To_be_certified_in_Company"                          : `${by1}`

              })

              payment_details.push({
                "slNo"                                               :4,
                "Proposed_Vendor_Code"                               :`${pvcode}`,
                "PAN_Number"                                         :`${doc_id}`,
                "iddd"                                               : "Percentage Total",
                "Payment_methord"                                    : "",
                "Percentage"                                         : `${percentage1}`,
                "Description"                                        : "",
                "Due_date"                                           :  "",
                "Mandatory_Documents_OR_Submissions"                  : "",
                "To_be_certified_in_Company"                          : ""

            })


            payment_type="";
            Advance="";
            progress="";
            due_date="";
            per_pay_pro="";
            progress_documents="";
            by="";
            per_pay_ret="";
            retention_documents="";
            by1="";
            percentage1="";

            final_quotearr.push({
              PAN_Number : doc_id ,
              Proposed_vendor_code:pvcode ,
              final_quote :vfinal_quote ,
              sub_date : acc_subdate,
              inv_id : ainv_id,
              vcount:vc,
              sm_id : smid,
              type:icon_type,
              
            })

            tec_rank.push({
              PAN_Number : doc_id ,
              Proposed_vendor_code:pvcode ,
              techacc : tech_acc,
              techrank : tech_app,
            })
            
            
            vfinal_quote=0;
            ainv_id="";
            acc_subdate="";
        

          progress_documents = "";
          retention_documents="";

          pan_vendor_response.push({
            Proposed_Vendor_Code                                                         : `${pvcode}`,
            PAN_Number                                                                   : `${doc_id}`,
            Proposed_Vendor_Name                                                         :  vendorids[k].org_name,
            Supplier_Origin_State                                                        : `${region1}`,
            Destination_State_BKTShipDASHto_LocationBKT                                  : `${sup_main_add}`,
            Vendor_GST_Number                                                            : `${GstNo}`,
            Vendor_CE_Score                                                              : "",
            Vendor_CE_Date                                                               : "",
            Vendor_PE_Score                                                              : "",
            Vendor_PE_Date                                                               : "",
            Vendor_Contact_PersonDASH1                                                   : `${supplier_contact1}`,
            Vendor_Contact_PersonDASH2                                                   : "" ,
            Technical_Committee_who_cleared_the_proposal                                 : `${tech_commitee_clearedproposal}`,
            Commercial_Committee_who_cleared_the_proposal                                : "",
            Vendor_References_to_be_displayed_in_Order                                   : "",
            Shortlisted_Vendors_Response_summary                                         : "",//title
            Incoterms                                                                    : `${inco_terms}`,
            Number_of_Back_to_back_Terms_agreed_with_Vendor_as_per_GPC_OR_GCC            : "",
            Details_of_deviated_or_better_terms_agreed_with_the_Vendor                   : "",
            Market_Scenario_and_Demand                                                   : "",
            Companys_Position_and_Market_dynamics_of_this_purchase                       : "",
            Should_Be_Cost_estimated                                                     : "",
            Highlights_of_this_proposal_and_Price_Justification_for_this_proposal        : "",
            Price_Escalation_Agreed_if_any                                               : "",
            Particulars_of_any_Free_Service_OR_Supply_Guarantees_OR_Warrant_yfrom_Vendor : "",
            Transportation                                                               : "",
            Logistics_Cost                                                               : "",
            Delivery_Schedule                                                            : `${delivery_schedule}`,
            Tax_Details                                                                  : "",
            Additional_Remarks                                                           : "",
            ABG                                                                          : `${abg}`,
            ABG_Value                                                                    : "",
            CPBG                                                                         : `${cpbg}`,
            CPBG_Value                                                                   : "",
            Scope_and_Responsibilities                                                   : `${ScopeandResponsibilities}`,
            Commercial_Terms                                                             : `${CommercialTerms}`,
            Compliance_Terms                                                             : `${ComplianceTerms}`,
            Others                                                                       : `${Others}`,
            Order_Value_BKTIn_Project_CurrencyBKT                                        : `${Amount}`,
            Order_Value_BKTIn_Bid_CurrencyBKT                                            : `${bid_currency}`,
            Vendor_Final_Quotation_Date                                                  : `${pay_date}`,
            Vendor_Final_Quotation_Amount                                                : "0",
            Project_CurrencyORBase_Currency                                              : `${proj_currency}`,
            Order_CurrencyORBid_currency                                                 : `${proj_currency}`,
            

         })       

         Amount="";
         region1="";
        sup_main_add="";
        GstNo="";
        cescore="";
        supplier_contact1="";
        progress_documents="";
        inco_terms="";
        cpbg="";
        delivery_schedule="";
        abg="";
        ScopeandResponsibilities="";
        CommercialTerms="";
        ComplianceTerms="";
        Others="";
        pay_date="";
        bid_currency="";
        pay_date="";
     
        //  if(doc_id != tsk_doc_id){

         vendordata.push({
          Proposed_Vendor_Code               : `${pvcode}`, //disp
          PAN_Number                         : `${doc_id}`,
          Awarded_Vendor                     : "NO",
          Vendor_Name                        :  `${vendorids[k].org_name}`,//disp
          Vendor_Location                    : `${tech_acc}`,
          Technically_Approved               : `${tech_app}`,
          Original_quote                     :"",//disp
          Final_Quote                        : "", //disp
          Order_amount_OR_Split_order_amount : "",
          // Proposed_Vendor_Code_nav           : "",
          Discount_Amount                    : "",
          Discount_percentage                : "",
          Rank                               : "0",
    
         })

            tech_acc = "";
            tech_app = "";
        // }
        
      }
     
      vendorids = [];
    } 


    var supcount = {};
        var supcount1 = venador_names.filter(obj => {
          if (!supcount[obj.vname]) {
              supcount[obj.vname] = true;
            return true;
          }
           return false;
        })
    
        sc_web_tab2.push({
          scount : supcount1.length,
          doc_id : doc_id,
        })
        venador_names=[];
        supcount1=[];

    console.log("stage4")

  //   if(l1amount.length == 1){
  //     l1AmountObtained = l1amount[0];

  // }
  
  // if(l1amount.length > 1){
  //   l1AmountObtained = Math.min(...l1amount);
  // }   

 
   
    
    // if(ser_mate == "Material"||ser_mate == "Both"){
    //   web_amt = l1AmountObtained
    // }
    // else if(ser_mate == "Service"){
    //   if(ex_price1.length == 1){
    //     web_amt = ex_price1[0];
    // }
    
    // if(ex_price1.length > 1){
    //   web_amt = Math.min(...ex_price1);
    // }  
      
    // }
    //  web_tab_dates.push({
    //   document_id : `${doc_id}`,
    //   publish_date : `${no_of_docs[i1].web_pub_date}`,
    //   pvendor : `${pvendor}`,
    //   icon_type : icon_type,
    //   status : `${award_vendor1}`,
    //   l1amount : `${web_amt}`
    //  })
     pvendor = 0;

     award_vendor1 = "NO";


  //   if(ser_mate == "Material"||ser_mate == "Both"){
  //   if(web_tab1_amt.length == 1){
  //     web_tab_amt  = web_tab1_amt[0];
  //    }
  
  // if(web_tab1_amt.length > 1){
  //   web_tab_amt = Math.min(...web_tab1_amt);
  // }  
  // }else if(ser_mate == "Service"){
  //   web_tab_amt = web_amt;
  // }
    

    // web_tab1.push({
    //   submissionDate : subdate,
    //   doc_id : doc_id,
    //   amount : web_tab_amt,
    //   status : `${award_vendor1}`,
    //   // unit : unit,
    //   // smid : supplier[k].smvendor_id,
    //   // smid : vendorids[k].smvendor_id,
    //   type : icon_type,
    // })
  
    web_tab1_amt = [];
     // L1 AMOUNT OBTAINED CALUCLATION

    
  
     console.log("stage5")


    


      panheader.push({
        "PAN_Number": doc_id,
        "SBG":`${sbg}` ,
        "SBU": `${sbu}`,
        "BUORPurchasing_Group": purchasing_grp,
        "Plant_Code": `${plant_id}`,
        "Project_Description": `${proj_desc}`,
        PR_NumberBKTsBKT : `${project_id}`,
        "PR_NumberBKTsBKT":RequisitionID.toString() ,
        "Subject_of_ProposalOROrder": `${subject_of_proposal}`,
        "Previous_PAN_References": "",
        "Split_OrderORNo_of_vendors":sup_count.toString(),
        "SOP_Type": "",
        "Order_Type_OR_Document_tyFuuidpe": `${ptype}`,
        "Asset_Type": "", //hided
        "Nature_of_Transaction": "",
        "Order_Location_OR_Plant":`${plant_name}`,
        "Base_line_spend": baselinespend1.toString(),
        "Project_CurrencyORBase_Currency": `${proj_currency}`,
        "Order_CurrencyORBid_currency": `${proj_currency}`,
        "Final_proposed_Value": l1AmountObtained.toString(),
        // "Order_Value_BKTIn_Project_CurrencyBKT": "     ", //present in payment table
        // "Order_Value_BKTIn_Bid_CurrencyBKT": "     ",  //present in payment table
        "Savings_achieved_btw_initial_and_final_quote": discount_amt.toString(),
        "Savings_against_base_line_spend_of_RFP": savings.toString(),
        // "Number_of_Vendors_Shortlisted_for_RFP":supplier_count,
        "Number_of_Vendors_Shortlisted_for_RFP":sup_count.toString(),
        "Number_of_Vendors_Technically_Qualified": "",
        "Required_at_Site_Date":`${delivery_date}`,
        "RFP_Number": `${doc_id}`,
        "RFP_Publish_Date":`${no_of_docs[i1].web_publish_date}`,
        "Time_Taken_for_FinalizationDASHIn_DAYS": `${no_of_docs[i1].final_date}`,
        // "Vendor_Final_Quotation_Date": web_publish_date,  //present in payment table
        // "Vendor_Final_Quotation_Amount": l1AmountObtained.toString(),  //present in payment table
        "status": "",
        "created_by": `${createdby}`,
        "task_id": `${uniqueName1}`,
        "type":`${icon_type}`,
        "status_a":`${doc_status}`,
        "ProjectId":`${cur_pro_id}`,
        "total_levels_of_approval" : "",
        "Current_level_of_approval" : "",
        "Sap_workitem_id":"", 
        // "justification": "",
        "Comments": "",
        "submitted_by": "",
        "submitted_date": "",
        
      })

    
       supplier = [];
       l1amount = [];
       number_of_vendors = 0;
       pvendor = 0;
       l1AmountObtained = 0;


    // }
    

  }
}
      } else{
      return return_doc;
    }
     }else{
      return  "no data for this project" ;
     }
    

  console.log("stage5.1")
  // scenario 4
    var date = [];
    var date1 = [];


    web_logic = [
      ...version1,
      ...final_quotearr
    ]

    var fstdoc="";

    // if(web_tab1.length != 0){
     if(web_logic.length != 0){
     
      for(let i=0;i<web_logic.length;i++){
        if(web_logic[i].type != "RFQ"){
          fstdoc = web_logic[i].PAN_Number;
          break;
        }
        
      }
       
       var oneround = 0;
       var oneround1=0;
       var type1 = "";
       var type = "";
       var typew="";

     for(let d=0;d<web_logic.length;d++){

      if(web_logic[d].sub_date !=""){
        typew=web_logic[d].type;
      date.push(web_logic[d].sub_date)
      }
      if(web_logic[d].type != "RFQ"  ){
        if(web_logic[d].sub_date !=""){
          date1.push(web_logic[d].sub_date)
        }
        
      }
       if(oneround1 == 0 && typew=="RFP"|| oneround1 == 0 && typew=="RFI" ){
        if(fstdoc !=web_logic[d].PAN_Number){
          oneround = 1;
          type = web_logic[d].type;
      }
      }
      if(web_logic[d].type == "RFQ"){
        oneround = 1;
        type1=web_logic[d].type;
      }
     }
   
 //FIRST PUBLISHED 
 var greatestDate="";
 var smallestdate=""

 if(version1.length !=0 || no_of_docs.length >1){
   smallestdate = date.reduce((acc, curr) => curr < acc ? curr : acc, date[0]);
   greatestDate = date.reduce((acc, curr) => curr > acc ? curr : acc, date[0]);
 }
else if(version1.length ==0 && no_of_docs.length == 1){
   smallestdate = date.reduce((acc, curr) => curr < acc ? curr : acc, date[0]);
}
// console.log(smallestdate);

for(let q= 0;q<sc_web_tab2.length;q++){
for(let r=0;r<web_logic.length;r++){
  if(web_logic[r].sub_date != ""){
  if((web_logic[r].sub_date == smallestdate)&&(web_logic[r].PAN_Number == sc_web_tab2[q].doc_id)){
    var dateString = web_logic[r].sub_date;
    var datesub = dateString.substring(0, 10)
    datesub = returndate(datesub);
    var no_v = sc_web_tab2[q].scount;
    var am = web_logic[r].final_quote;
    // am = returnamt(am);
    number = sc_web_tab2[q].doc_id;

    // number = number.substring(number.length - 4)
    if(pan_web_event.length == 0){
      // if(web_tab_dates.length !=1){
    pan_web_event.push({
      idd : "1" ,
      PAN_Number :tsk_doc_id.toString(),
      eventNo : "First Published",
      number:`${number}`,
      date:`${datesub}`,
      numberOfVendorsParticipated :no_v.toString(),
      l1AmountObtained :am.toString(),
     }) 
    // }
    }

  }

  else if((web_logic[r].sub_date == greatestDate)&&(web_logic[r].PAN_Number == sc_web_tab2[q].doc_id)){
    if(version1.length !=[] && oneround == 0 ){
    var dateString = web_logic[r].sub_date;
    var datesub = dateString.substring(0, 10)
    datesub = returndate(datesub);
    var no_v = sc_web_tab2[q].scount;
    var am = web_logic[r].final_quote;
    // am = returnamt(am);
    number = sc_web_tab2[q].doc_id;
    // number = number.substring(number.length - 4)
    if(pan_web_event.length == 1){
      // if(web_tab_dates.length !=1){
    pan_web_event.push({
      idd : "2" ,
      PAN_Number :tsk_doc_id.toString(),
      eventNo : "Last Published(Before RA)",
      number:`${number}`,
      date:`${datesub}`,
      numberOfVendorsParticipated :no_v.toString(),
      l1AmountObtained :am.toString(),
     }) 
    // }
    }
  }

  }
}
  // break;
  }
  // break;
}

  //SECOND PUBLISHED

if(oneround == 1 && type == "RFP"|| oneround == 1 && type == "RFI"){
var round2_date = date1.reduce((acc, curr) => curr > acc ? curr : acc, date1[0]);
 for(let q= 0;q<sc_web_tab2.length;q++){
  for(let r=0;r<web_logic.length;r++){
    if(web_logic[r].sub_date != ""){
    if((web_logic[r].sub_date == round2_date)&&(web_logic[r].PAN_Number == sc_web_tab2[q].doc_id)){
      var dateString = web_logic[r].sub_date;
      var datesub = dateString.substring(0, 10)
      datesub = returndate(datesub);
      var no_v = sc_web_tab2[q].scount;
      var am = web_logic[r].final_quote;
      // am = returnamt(am);
      number = sc_web_tab2[q].doc_id;
      // number = number.substring(number.length - 4)
      if(pan_web_event.length == 1){
      pan_web_event.push({
        idd : "2" ,
        PAN_Number :tsk_doc_id.toString(),
        eventNo : "Last Published(Before RA)",
        number:`${number}`,
        date:`${datesub}`,
        numberOfVendorsParticipated :no_v.toString(),
        l1AmountObtained :am.toString(),
       }) 
      }
  
    }
  }
    // break;
    }
    // break;
  }
}

// else if(oneround = 1 && type == "RFQ"){
//   pan_web_event.push({
//     idd : "2" ,
//     PAN_Number :tsk_doc_id.toString(),
//     eventNo : "Last Published(Before RA)",
//     number:"NA",
//     date:"NA",
//     numberOfVendorsParticipated :"NA",
//     l1AmountObtained :"0",
//    }) 

// }

 if(oneround == 1 && type == "RFQ" || oneround == 1 && type1 == "RFQ" )
for(let q= 0;q<sc_web_tab2.length;q++){
  for(let r=0;r<web_logic.length;r++){
    if(web_logic[r].sub_date != ""){
    if((web_logic[r].type == "RFQ")&&(web_logic[r].PAN_Number == sc_web_tab2[q].doc_id) ){
      if(web_logic[r].sub_date==greatestDate){
      var dateString = web_logic[r].sub_date;
      var datesub = dateString.substring(0, 10)
      datesub = returndate(datesub);
      var no_v = sc_web_tab2[q].scount;
      var am = web_logic[r].final_quote;
      // am = returnamt(am);
      number = sc_web_tab2[q].doc_id;
      // number = number.substring(number.length - 4)
     if(pan_web_event.length == 1){
      pan_web_event.push({
        idd : "2" ,
        PAN_Number :tsk_doc_id.toString(),
        eventNo : "Last Published(Before RA)",
        number:"NA",
        date:"NA",
        numberOfVendorsParticipated :"NA",
        l1AmountObtained :"NA",
       })
     }

      if(pan_web_event.length == 2){
        // if(web_tab_dates.length !=1){
      pan_web_event.push({
        idd : "3" ,
        PAN_Number :tsk_doc_id.toString(),
        eventNo : "Reverse Auction(RA)",
        number:`${number}`,
        date:`${datesub}`,
        numberOfVendorsParticipated :no_v.toString(),
        l1AmountObtained :am.toString(),
       }) 
      // }
      }
    }
    }
  }
    // break;
    }
    // break;
  }
}




// }
// else{
//   console.log("item details are not there")
// }

  //LAST PUBLISHED

  // console.log("stage6")
  var doc_id_fornow = "";

  //Web event logic
  var dates = [];
  var date2 = [];
 
//  if(web_tab_dates.length != 0){
//   // if(version == 1){

//   var fstdoc1 = web_tab_dates[0].document_id;
//     var oneround1 = 0;
//     var type1 = "";

//   for(let z=0;z<web_tab_dates.length;z++){
//    dates.push(web_tab_dates[z].publish_date)
//    if(web_tab_dates[z].icon_type != "RFQ"){
//     date2.push(web_tab_dates[z].publish_date)
//   }
//     if(oneround1 == 0){
//     if(fstdoc1 !=web_tab_dates[z].document_id){
//       oneround1 = 1;
//       type1 = web_tab_dates[z].icon_type;
//   }
//   }

//    if(web_tab_dates[z].status == "YES"){
//     //  doc_id_fornow = web_tab_dates[z].document_id;
//     doc_id_fornow = tsk_doc_id
//    }
//   }
//   var dates1 = dates.map(dateString => new Date(dateString));
 
//    console.log("stage5.2")
//   // if(web_tab1.length != 0){
//     if(web_logic.length == 0){
//     const smallestDate1 = dates.reduce((acc, curr) => curr < acc ? curr : acc, dates[0]);
//     const greatestDate = dates.reduce((acc, curr) => curr > acc ? curr : acc, dates[0]); 

   
    
  
//       for(let z=0;z<web_tab_dates.length;z++){
//         let number = "";
//         var no_v=0;
//         number = web_tab_dates[z].document_id;
//        //  number = number.substring(number.length - 4)
//         var dateString = web_tab_dates[z].publish_date;
//          var datesub = dateString.substring(0, 10)
//          datesub = returndate(datesub);
//          for(let s=0;s<sc_web_tab2.length;s++){
//           if(sc_web_tab2[s].doc_id == number){
//             no_v = sc_web_tab2[s].scount;
//           }
//          }
        
//         var am = web_tab_dates[z].l1amount;
//         am = returnamt(am);
        
//         if((web_tab_dates[z].publish_date == smallestDate1 && web_tab_dates[z].icon_type == "RFP" && web_tab_dates[z].status == "NO")||(web_tab_dates[z].publish_date == greatestDate && web_tab_dates[z].icon_type == "RFP" && web_tab_dates[z].status == "YES") ){
           
//          if(pan_web_event.length == 0){
//           var idd = "1";
//           var eventno = "First Published"
          
//          }
//          else if(pan_web_event.length == 1 ){
//           var idd = "2";
//           var eventno = "Last Published(Before RA)"
//          }

         
//           if(pan_web_event.length ==0||(pan_web_event.length==1 )){
           
//           pan_web_event.push({
//               idd : `${idd}` ,
//               PAN_Number : tsk_doc_id.toString(),
//               eventNo : eventno,
//               number:`${number}`,
//               date:`${datesub}`,
//               numberOfVendorsParticipated :no_v.toString(),
//               l1AmountObtained :am.toString(),
//              })
//             }
//           }
//            if(oneround1 == 1 && type1 == "RFP"){
//             last_rfp_date =  date2.reduce((acc, curr) => curr > acc ? curr : acc, date2[0]);
//             for(let z=0;z<web_tab_dates.length;z++){
//               let number = "";
//               var no_v=0;
//               number = web_tab_dates[z].document_id;
//              //  number = number.substring(number.length - 4)
//               var dateString = web_tab_dates[z].publish_date;
//                var datesub = dateString.substring(0, 10)
//                datesub = returndate(datesub);
//                for(let s=0;s<sc_web_tab2.length;s++){
//                 if(sc_web_tab2[s].doc_id == number){
//                   no_v = sc_web_tab2[s].scount;
//                 }
//                }
//               var am = web_tab_dates[z].l1amount;
//               am = returnamt(am);
//              if(web_tab_dates[z].publish_date == last_rfp_date){
//               if(pan_web_event.length == 1 ){
//               pan_web_event.push({
//                 idd :"2" ,
//                 PAN_Number : tsk_doc_id.toString(),
//                 eventNo : "Last Published(Before RA)",
//                 number:`${number}`,
//                 date:`${datesub}`,
//                 numberOfVendorsParticipated :`${no_v}`,
//                 l1AmountObtained :`${am}`,
//                })
//               }
//               }

//             }
//           }
//            if((web_tab_dates[z].publish_date == greatestDate && web_tab_dates[z].icon_type == "RFQ" && web_tab_dates[z].status == "YES") && (oneround1 == 1 && type1 == "RFQ")){
//              if(pan_web_event.length == 1){
//               pan_web_event.push({
//                 idd :"2" ,
//                 PAN_Number : tsk_doc_id.toString(),
//                 eventNo : "Last Published(Before RA)",
//                 number:"NA",
//                 date:"NA",
//                 numberOfVendorsParticipated :"NA",
//                 l1AmountObtained :"0",
//                })
//              }
//             // if(version == 1){
//             pan_web_event.push({
//               idd :"3" ,
//               PAN_Number : tsk_doc_id.toString(),
//               eventNo : "Reverse Auction(RA)",
//               number:`${number}`,
//               date:`${datesub}`,
//               numberOfVendorsParticipated :no_v.toString(),
//               l1AmountObtained :am.toString(),
//              })
//             // }
//           }
        
//        }

//       // }

//   // }



//   // if(web_tab1.length != 0 && web_tab2.length != 0){
//   // const greatestDate = dates.reduce((acc, curr) => curr > acc ? curr : acc, dates[0]); 
//   // var final_web_tab = [];

//   // for(let z=0;z<web_tab_dates.length;z++){
//   //   let number = "";
//   //   number = web_tab_dates[z].document_id;
//   //  //  number = number.substring(number.length - 4)
//   //   var dateString = web_tab_dates[z].publish_date;
//   //    var datesub = dateString.substring(0, 10)
//   //    datesub = returndate(datesub);
//   //   var no_v = web_tab_dates[z].pvendor;
//   //   var am = web_tab_dates[z].l1amount;
//   //   am = returnamt(am);
//   //   if((web_tab_dates[z].publish_date == greatestDate && web_tab_dates[z].icon_type == "RFQ" && web_tab_dates[z].status == "YES")||((web_tab_dates[z].publish_date == greatestDate && web_tab_dates[z].icon_type == "RFP" && web_tab_dates[z].status == "YES") )){
//   //     if(pan_web_event.length == 0 || pan_web_event.length == 2){
//   //       if(pan_web_event.length == 0){
//   //         var idd = "1";
//   //         var  eventno = "First Published";
//   //         var web_ind = 1;
//   //       }
//   //       else if(pan_web_event.length == 2){
//   //         var idd = "3";
//   //         var eventno = "Reverse Auction(RA)";
//   //         var web_ind = 0;
//   //       }

//   //     pan_web_event.push({
//   //         idd : `${idd}` ,
//   //         PAN_Number : tsk_doc_id.toString(),
//   //         eventNo : eventno,
//   //         number:`${number}`,
//   //         date:`${datesub}`,
//   //         numberOfVendorsParticipated :no_v.toString(),
//   //         l1AmountObtained :am.toString(),
//   //        })
//   //     }
//   //   }
//   //  }
   
//   }
//       // w_type ="RFP";

//       // if( version >1){
//       //   const ver1scount = {};
//       //   if(v1sup_count !=[]){
//       //   var ver1scount1 = v1sup_count.filter(obj => {
//       //     if (!ver1scount[obj.vname]) {
//       //       ver1scount[obj.vname] = true;
//       //       return true;
//       //     }
//       //      return false;
//       //   })
//       // }
       
//       //   let no_v = 0;
//       //   for(let k=0;k<sc_web_tab2.length;k++){
//       //     if(sc_web_tab2[k].doc_id == tsk_doc_id){
//       //       no_v = sc_web_tab2[k].scount;
//       //     }
//       //   }

//       //   var v1dates=[];
//       //   let am1=0;
//       //   if(version1 !=[]){
//       //   for(let v1=0;v1<version1.length;v1++){
//       //     v1dates.push(version1[v1].subdate)

//       //   }
//       //   var v1smallestdate = v1dates.reduce((acc, curr) => curr < acc ? curr : acc, v1dates[0]);
        
//       //   for(let v=0;v<version1.length;v++){
//       //     if(version1[v].subdate == v1smallestdate){
//       //        am1 = version1[v].final_quote;
           
//       //     }
//       //   }
//       // }
//       //   if(pan_web_event != []){
//       //   pan_web_event[0].l1AmountObtained = `${am1}`;
//       //   pan_web_event[0].numberOfVendorsParticipated = `${no_v}`
      
//       //   }
        

//       //  }
//     // if(version >1){
//     //   if(w_type == "RFP"){

//     //     for(let z=0;z<web_tab_dates.length;z++){
//     //       let number = "";
//     //       var no_v=0;
//     //       if(web_tab_dates[z].document_id == tsk_doc_id){
//     //       number = web_tab_dates[z].document_id;
//     //      //  number = number.substring(number.length - 4)
//     //       var dateString = web_tab_dates[z].publish_date;
//     //        var datesub = dateString.substring(0, 10)
//     //        datesub = returndate(datesub);
//     //        for(let s=0;s<sc_web_tab2.length;s++){
//     //         if(sc_web_tab2[s].doc_id == number){
//     //           no_v = sc_web_tab2[s].scount;
//     //         }
//     //        }
           
//     //       // var no_v = web_tab_dates[z].pvendor;
//     //       var am = web_tab_dates[z].l1amount;
//     //       am = returnamt(am);
//     //       if(pan_web_event.length == 1){
//     //       pan_web_event.push({
//     //         idd :"2" ,
//     //         PAN_Number : tsk_doc_id.toString(),
//     //         eventNo :  "Last Published(Before RA)",
//     //         number:`${number}`,
//     //         date:`${datesub}`,
//     //         numberOfVendorsParticipated :no_v.toString(),
//     //         l1AmountObtained :am.toString(),
//     //        })
//     //       }
//     //       }
//     //     }

//     //   }else if(w_type == "Auction"){
//     //       if(pan_web_event.length == 1){
//     //         pan_web_event.push({
//     //           idd :"2" ,
//     //           PAN_Number : tsk_doc_id.toString(),
//     //           eventNo :  "Last Published(Before RA)",
//     //           number:"NA",
//     //           date:"NA",
//     //           numberOfVendorsParticipated :"NA",
//     //           l1AmountObtained :"0",
//     //          })
//     //       }
        
//     //     for(let z=0;z<web_tab_dates.length;z++){
//     //       let number = "";
//     //       var no_v=0;
//     //       if(web_tab_dates[z].document_id == tsk_doc_id){
//     //       number = web_tab_dates[z].document_id;
//     //      //  number = number.substring(number.length - 4)
//     //       var dateString = web_tab_dates[z].publish_date;
//     //        var datesub = dateString.substring(0, 10)
//     //        datesub = returndate(datesub);
//     //        for(let s=0;s<sc_web_tab2.length;s++){
//     //         if(sc_web_tab2[s].doc_id == number){
//     //           no_v = sc_web_tab2[s].scount;
//     //         }
//     //        }
//     //       // var no_v = web_tab_dates[z].pvendor;
//     //       var am = web_tab_dates[z].l1amount;
//     //       am = returnamt(am);
//     //       if(pan_web_event.length == 2){
//     //       pan_web_event.push({
//     //         idd :"3" ,
//     //         PAN_Number : tsk_doc_id.toString(),
//     //         eventNo :  "Reverse Auction(RA)",
//     //         number:`${number}`,
//     //         date:`${datesub}`,
//     //         numberOfVendorsParticipated :no_v.toString(),
//     //         l1AmountObtained :am.toString(),
//     //        })
//     //       }
//     //       }
//     //     }
//     //   }
//     // }
//   // }
// }
 
  if( pan_web_event.length == 1){
    for(let k = 2;k<4;k++){
      var event2 = "";
      if(k==2){
        event2 = "Last Published(Before RA)"
      }
      else if(k==3){
        event2 = "Reverse Auction(RA)"
      }
      pan_web_event.push({
        idd : `${k}` ,
        PAN_Number : tsk_doc_id.toString(),
        eventNo : `${event2}`,
        number:"NA",
        date:"NA",
        numberOfVendorsParticipated :"NA",
        l1AmountObtained :"0" ,
       })
    }
  }
  if(pan_web_event.length == 2){
    pan_web_event.push({
      idd : "3" ,
      PAN_Number : tsk_doc_id.toString(),
      eventNo : "Reverse Auction(RA)",
      number:"NA",
      date:"NA",
      numberOfVendorsParticipated :"NA",
      l1AmountObtained :"0" ,
     })
  }

  
   web_tab_dates = [];
       

    console.log("stage5.3")

      //  getcall.destination.headers.url = 'https://openapi.ariba.com/api/sourcing-event/v2/prod/events/'+tsk_doc_id+'/scenarios';
      //   getcall.destination.headers.query = 'dataFetchMode=DETAIL&realm=tataprojects-T&user='+userName+'&passwordAdapter='+password+'&apikey=luMlEgWHIOb7lNhS6HMWHz2t8tkPD3QN';
      //   getcall.destination.headers.basis = 'Basic M2QyM2NjMzQtMjhmNC00YzMzLWIxMGUtZjAwMjdkMzExMGE4OlpyZjJzR3RNRFA3YVNEclBoNlhrNW9kNGM0UllWUFVS'
      //    shrt_lst_count = await getcall.tx(req).get('/getcall');
      var ch=0
         if (shrt_lst_count.payload.length != 0){
          
          for(let r = 0;r<shrt_lst_count.payload.length;r++){
           
            if((shrt_lst_count.payload[r].awardStatus == 7 ) || shrt_lst_count.payload[r].awardStatus == 6 ){
                  ch=1;
               if("rollupTerms" in shrt_lst_count.payload[r] && shrt_lst_count.payload[r].rollupTerms.length != 0 ){   
              for(let j= 0;j<shrt_lst_count.payload[r].rollupTerms.length;j++){
                if(ser_mate == "Material"||ser_mate == "Both"){
                if(shrt_lst_count.payload[r].rollupTerms[j].title == "Total Cost"){
                  if("value" in shrt_lst_count.payload[r].rollupTerms[j] ){
                    if("supplierValue" in shrt_lst_count.payload[r].rollupTerms[j].value ){
                      if("amount" in shrt_lst_count.payload[r].rollupTerms[j].value.supplierValue ){
                        final_quote = shrt_lst_count.payload[r].rollupTerms[j].value.supplierValue.amount;
                      }
                    }
                  }
               
                // final_quote1 = returnamt(final_quote);

                }
              }
              else if(ser_mate == "Service"){
                if(shrt_lst_count.payload[r].rollupTerms[j].title == "Extended Price"){

                 if("value" in shrt_lst_count.payload[r].rollupTerms[j] ){
                    if("supplierValue" in shrt_lst_count.payload[r].rollupTerms[j].value ){
                      if("amount" in shrt_lst_count.payload[r].rollupTerms[j].value.supplierValue ){
                        final_quote = shrt_lst_count.payload[r].rollupTerms[j].value.supplierValue.amount;
                      }
                    }
                  }
                  }
              }
              }
            }
              
              if("scenarioSummary" in shrt_lst_count.payload[r]){
                if("participantSummaryList" in shrt_lst_count.payload[r].scenarioSummary && shrt_lst_count.payload[r].scenarioSummary.participantSummaryList.length != 0){

                  for(let q=0;q<shrt_lst_count.payload[r].scenarioSummary.participantSummaryList.length;q++){

                    // var  rollupterms = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList;
                    //  for(let i = 0 ;i<rollupterms.length;i++){
                    //    if(rollupterms[i].title == "Total Cost"){
                    //      var vtotal_cost = rollupterms[i].value.moneyValue.amount;
                    //    }
                    //  }
                      if("supplier" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q]){
                        if("name" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier ){
                          vname = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier.name;
                        }
                       
                        // erp_id = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier.erpVendorID;
                        if("smVendorID" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier ){
                        sm_id = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier.smVendorID;
                        }
                        // items= shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].numberOfSelectedItems;
                      }
                      
                      // if(erp_id == null){
                      //   erp_id = "";
                      // }
                      if(vname==null){
                        vname="";
                      }
                      if(sm_id == null){
                        sm_id = "";
                      }
                    //  vendor_loc = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[0].value.moneyValue.amount;
                    //  vendor_loc = returnamt(vendor_loc)
    
    
    
                    
                    var loc ="";
                    if(ser_mate == "Material" || ser_mate == "Both"){
                       loc  = "Total Cost";
                    }else if(ser_mate == "Service"){
                       loc = "Extended Price"
                    }

                    if("rollupTermList" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q]){
                      if(shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList.length !=0){
                        for(let l =0;l<shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList.length;l++){
                          if(shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[l].title == loc){
                            if("value" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[l]){
                              if("moneyValue" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[l].value){
                                if("amount" in shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[l].value.moneyValue ){
                                  vendor_loc = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].rollupTermList[l].value.moneyValue.amount;

                                }
                              }
                            }
                            
                          }
        
                        }
                      }
                    }
                   
                    //  vendor_loc = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier.address.city+ " "+ shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[q].supplier.address.country;
                      
                    //  if(web_tab2.length != 0){
                    //  for(let r=0;r<web_tab2.length;r++){
                    //   if(web_tab2[r].doc_id == tsk_doc_id && web_tab2[r].smid == sm_id){
                    //      original_quote =  web_tab2[r].amount;
                    //      original_quote1 = returnamt(original_quote);
                    //   }
                    //  }
                    // }
                    // if(price_details1.length != 0){
                    //   for(let r=0;r<price_details1.length;r++){
                    //     if(price_details1[r].PAN_Number == tsk_doc_id && price_details1[r].Proposed_Vendor_Code == erp_id ){
                    //       original_quote = original_quote + parseFloat(price_details1[r].amount);
                    //     }
                    //   }
                    // }
    
                    // original_quote1 = returnamt(original_quote);
                    var acc_ind =0;
                    var orinv_id = "";
                    var ordates=[];
                    var ordates1=[];
                    if( vendorids1.length !=0){
                    for(let v=0;v<vendorids1.length;v++){
                      if(vendorids1[v].smvendor_id == sm_id && vendorids1[v].doc_id == tsk_doc_id ){
                        orinv_id = vendorids1[v].vinv_id;
                        console.log(orinv_id );
                      }
                    }
                  }
                  if(version1.length !=0){
                    for(let vr=0;vr<version1.length;vr++){
                      if(version1[vr].inv_id == orinv_id &&version1[vr].PAN_Number == tsk_doc_id){
                       ordates.push(version1[vr].sub_date);
                       acc_ind=1;
                      }
                    }
                  }
    
                    if(acc_ind == 1 && version1.length !=0){
                   var orsmdate =  ordates.reduce((acc, curr) => curr < acc ? curr : acc, ordates[0]);
                    
                   for(let j=0;j<version1.length;j++){
                    if(version1[j].sub_date == orsmdate && version1[j].PAN_Number == tsk_doc_id){
                      original_quote =  version1[j].final_quote;
                      // original_quote1 = returnamt(original_quote);
                    }
                   }
                  }else if(acc_ind == 0){
                    original_quote = 0;
                    for(let f=0;f<final_quotearr.length;f++){
                      if(final_quotearr[f].sm_id == sm_id && final_quotearr[f].PAN_Number == tsk_doc_id ){
                        ordates1.push(final_quotearr[f].sub_date);
                      }
                     
    
                  }
                  var orsmdate1 =  ordates1.reduce((acc, curr) => curr < acc ? curr : acc, ordates1[0]);
                  for(let f=0;f<final_quotearr.length;f++){
                    if(final_quotearr[f].sub_date == orsmdate1 && final_quotearr[f].PAN_Number == tsk_doc_id){
                      original_quote = final_quotearr[f].final_quote;
                      break;
                    }
    
                  }
                  }
    
                  
    
    
    
                    for(let f=0;f<final_quotearr.length;f++){
                      if(final_quotearr[f].PAN_Number == tsk_doc_id ){
                      if( final_quotearr[f].sm_id == sm_id  ){
                        final_quote1 = final_quotearr[f].final_quote
                        final_quote1 = final_quotearr[f].final_quote
                     
                    }
                  }
                   
                  }
                  
    
    
    
                      //  discount_amt  = pan_web_event[0].l1AmountObtained - final_quote;
                    if(final_quote1 != 0){
                      discount_amt = original_quote - final_quote1;
                      // var str = discount_amt.toString();
                      // discount_amt = Math.abs(discount_amt)
                      discount_amt =  discount_amt.toFixed(2)
                      discount_amt2 = returnamt(discount_amt);
    
                       dis_per = ( ( original_quote - final_quote1 ) / final_quote1) * 100;
                    //  dis_per = Math.abs(dis_per);
                     dis_per = dis_per.toFixed(2);
                      dis_per = dis_per + " %";
                    }
    
                    if(tec_rank.length != 0){
                      for(let t=0;t<tec_rank.length;t++){
                        if(tec_rank[t].PAN_Number == tsk_doc_id){
                          if(tec_rank[t].Proposed_vendor_code == sm_id){
                            trank = tec_rank[t].techrank;
                            tapp = tec_rank[t].techacc;
                          }
                        }
                      }
                    }
                    
    
    
    
    
    
                    // else{
                    //   discount_amt = 0;
                    //   dis_per = 0;
                    // }
                    
                    // discount_amt = discount_amt.toLocaleString();
                    
                    // savings = savings.toFixed(2);
     
                   
                   // var dis_per = ( pan_web_event[0].l1AmountObtained / final_quote) * 100;
                     
    
                      //VENDORS WHO ALL ARE AWARDED
    
                     vendordata1.push({
                      Proposed_Vendor_Code               : `${sm_id}`, //disp
                      PAN_Number                         : `${tsk_doc_id}`,
                      Awarded_Vendor                     : "YES",
                      Vendor_Name                        : `${vname}`,//disp
                      Vendor_Location                    : `${trank}`,
                      Technically_Approved               : `${tapp}`,
                      Original_quote                     :`${returnamt(original_quote)}`,//disp
                      Final_Quote                        : `${returnamt(final_quote1)}`, //disp
                      Order_amount_OR_Split_order_amount : `${returnamt(vendor_loc)}`,
                      // Proposed_Vendor_Code_nav           : " ",
                      Discount_Amount                    : `${discount_amt2}`,
                      Discount_percentage                : `${dis_per}`,
                      Rank                               : "1",
              
                     })
                    
                     vname="";
                    vendor_loc=0;
                    original_quote1=0;
                    final_quote1=0;
                    original_quote=0;
                    // final_quote=0;
                    discount_amt2=0;
                    dis_per=0;
                    discount_amt=0;
    
                     console.log("stage5.4")
                  }

                }
              }
              





              // supplier_count = `${shrt_lst_count.payload[0].selectedSuppliersCount}`;

              // erpVendorID = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[0].supplier.erpVendorID;
              // vendorname = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[0].supplier.name;
              // vendor_loc = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[0].supplier.address.lines[0]+ " "+
              // vendor_loc = shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[0].supplier.address.city+ " "+ shrt_lst_count.payload[r].scenarioSummary.participantSummaryList[0].supplier.address.country;
              // Subject_of_ProposalOROrder = `${shrt_lst_count.payload[r].selectedSuppliersCount}`;
              awarded_vendor = "YES";


              
              



              
              
                 for(let k =0;k<shrt_lst_count.payload[r].supplierBids.length;k++){
                  if(ser_mate =="Material"||ser_mate =="Both"){
                  if(shrt_lst_count.payload[r].supplierBids[k].item.title != "Totals" && shrt_lst_count.payload[r].supplierBids[k].item.title != "services" ){
                    var terms3 =[];
                    if("terms" in shrt_lst_count.payload[r].supplierBids[k].item){
                      terms3 = shrt_lst_count.payload[r].supplierBids[k].item.terms;
                    }
                    
                     
                    var pvcode1 = "";
                    for(let v=0;v<vendorids1.length;v++){
                      if(shrt_lst_count.payload[r].supplierBids[k].invitationId == vendorids1[v].vinv_id && vendorids1[v].doc_id ==  tsk_doc_id){
                         pvcode1 = vendorids1[v].pvcode;
                      }
                    }
                    
                    
                    if(terms3.length != 0){
                      for(let it=0;it<terms3.length;it++){
                        var value2 = "value";
                            if(terms3[it].title =="HSNCode"||terms3[it].title =="SACCode"){
                             if(Object.keys(terms3[it]).includes(value2)){
                                SACCode = terms3[it].value.simpleValue;
                             }else{
                               SACCode = "";
                             }
                           }
                             
                             
                             if(terms3[it].fieldId == "MaterialCode"){
                             if(Object.keys(terms3[it]).includes(value2)){
                             ItemCode = terms3[it].value.simpleValue;
                             let match = ItemCode.match(/^\d+/); 
                             let output = match ? match[0] : null;
                             ItemCode = output;
                             }else{
                               ItemCode = "";
                             }
                             }
                            
      
                             if(terms3[it].title =="Quantity"){
                               if(Object.keys(terms3[it]).includes(value2)){
                                UOM = terms3[it].value.quantityValue.unitOfMeasureName;
                                Quantity = terms3[it].value.quantityValue.amount;
                                Quantity = Quantity.toLocaleString('en-US');
                               }else{
                                 Quantity = "";
                               }
                             }
                             if(terms3[it].title == "Total Cost"){
                               if(Object.keys(terms3[it]).includes(value2)){
                               l1Amount = l1Amount +  terms3[it].value.moneyValue.amount;
                               bid_currency = terms3[it].value.supplierValue.currency;
                               l3Amount = terms3[it].value.moneyValue.amount;
                                var l4Amount = l3Amount;
                               l3Amount = returnamt(l3Amount);
                               }else{
                                 l1Amount = 0;
                                 bid_currency = "";
                                 l3Amount = 0;
                               }
                             }
                             
     
                             if(terms3[it].title =="Price"){
                              if(Object.keys(terms3[it]).includes(value2)){
                               UnitPrice = terms3[it].value.supplierValue.currency;
                               Amount = terms3[it].value.supplierValue.amount;
                               if(UnitPrice == "INR"){
                               Amount = Amount.toLocaleString('en-IN');
                               }
                               if(UnitPrice == "USD"){
                                Amount = Amount.toLocaleString('en-US');   
                               }
                              }
                              else{
                                UnitPrice = "";
                                Amount = "";
 
                              }
                            }

                            if(terms3[it].title =="Extended Price"){
                              if(Object.keys(terms3[it]).includes(value2)){
                              extend_price = terms3[it].value.moneyValue.amount;
                              extend_price = returnamt(extend_price);
                              }
                              else{
                                extend_price= "";                              
                              }
                            }
                            
                             
                             if(terms3[it].title == "Delivery Schedule - Quantity"){
                               if(Object.keys(terms3[it]).includes(value2)){
                                 delivery_schedule = terms3[it].value.simpleValue;
                               }
                               else{
                                 delivery_schedule = "";
                               }
                             }
     
                             if(terms3[it].title == "Delivery Schedule - Date"){
                               if(Object.keys(terms3[it]).includes(value2)){
                            
                                 delivery_schedule1 = terms3[it].value.simpleValue;
                                 if(delivery_schedule != ""){
                                   delivery_schedule = delivery_schedule + " " + delivery_schedule1;
                                 }
                                 
                               }
                               else{
                                 delivery_schedule = ""
                               }
                            
                             }
  
                             if(terms3[it].title == "Quantity Over Delivery Tolerance"){
                              
                            
                                 if(Object.keys(terms3[it]).includes(value2)){
                                   tolerence = terms3[it].value.simpleValue;
                                 }else{
                                   tolerence = ""
                                 }
                          
                              }
     
     
                             if(terms3[it].title == "Delivery Date"){
                              if(Object.keys(terms3[it]).includes(value2)){
                                var date_obj =   terms3[it].value.dateValue;
                               date_obj = new Date(date_obj);
                                delivery_date = date_obj.toISOString().split('T')[0];
                                // delivery_date = terms3[it].value.dateValue;
                                delivery_date = returndate(delivery_date);
                              //  var input = new Date(delivery_date);
                              }else{
                                delivery_date = ""
                              }
     
                              //  // Define the days of the week and months
                              //  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                              //  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
     
                              //  // Extract day of the week, day, month, and year
                              //  var dayOfWeek = daysOfWeek[input.getUTCDay()];
                              //  var day = input.getUTCDate();
                              //  var month = months[input.getUTCMonth()];
                              //  var year = input.getUTCFullYear();
     
                              //  // Format the date string
                              //   delivery_date = `${dayOfWeek}, ${day} ${month}, ${year}`;
     
                               // console.log(formattedDate);
     
                             }
                            
     
                             if(terms3[it].title =="Tax"){
                              if(Object.keys(terms3[it]).includes(value2)){
                                IndianTaxPER = terms3[it].value.simpleValue;
                              }else{
                                IndianTaxPER = ""
                              }
                             }
                            
  
                      }
                     }
  
                      price_details.push({
                        Proposed_Vendor_Code                                                         : `${pvcode1}`, 
                        PAN_Number                                                                   : `${tsk_doc_id}`,
                        Item_Code                                                                    : `${ItemCode}`,
                        PAN_Number                                                                   : `${tsk_doc_id}`,
                        HSN_OR_SAC_Code                                                              : `${SACCode}`,
                        Item_Short_Description                                                       : `${shrt_lst_count.payload[r].supplierBids[k].item.title}`,
                        UOM                                                                          : `${UOM}`,
                        Quantity                                                                     : `${Quantity}`,
                        Unit_Price                                                                   : `${Amount}`,
                        Amount                                                                       : `${l3Amount}`,
                        extendedPrice                                                                :  `${extend_price}`,
                        Indian_Tax_PER                                                               : `${IndianTaxPER}`,
                        Quantity_Over_Delivery_Tolerance                                             : `${tolerence}`,
              
                     })
                     item_details.push({
                      item_name : shrt_lst_count.payload[r].supplierBids[k].item.title,
                      inv_id :shrt_lst_count.payload[r].supplierBids[k].invitationId,
                      allocation_type : shrt_lst_count.payload[r].supplierBids[k].winningSplitType,
                      allocate_per : shrt_lst_count.payload[r].supplierBids[k].winningSplitValue,
                      // totl_amt : shrt_lst_count.payload[r].supplierBids[k].item.terms[0].value.moneyValue.amount
                      totl_amt : `${l4Amount}`,
                    })
                     
                    SACCode="";
                    ItemCode="";
                    ItemShortDescription="";
                    UOM="";
                    Quantity="";
                    Amount="";
                    l4Amount="";
                    extend_price="";
                    IndianTaxPER="";
                    tolerence="";
                   

                  

                  }
                }
                 else if(ser_mate =="Service"){
                  if(shrt_lst_count.payload[r].supplierBids[k].item.title != "Totals" && shrt_lst_count.payload[r].supplierBids[k].item.itemType == 5){
                    var terms3=[];
                    if("terms" in shrt_lst_count.payload[r].supplierBids[k].item){
                      terms3 = shrt_lst_count.payload[r].supplierBids[k].item.terms;
                    }
                     

                    item_details.push({
                      item_name : shrt_lst_count.payload[r].supplierBids[k].item.title,
                      inv_id :shrt_lst_count.payload[r].supplierBids[k].invitationId,
                      allocation_type : shrt_lst_count.payload[r].supplierBids[k].winningSplitType,
                      allocate_per : shrt_lst_count.payload[r].supplierBids[k].winningSplitValue,
                      totl_amt : shrt_lst_count.payload[r].supplierBids[k].item.terms[0].value.moneyValue.amount
                    })

                    var pvcode1 = "";
                    for(let v=0;v<vendorids1.length;v++){
                      if(shrt_lst_count.payload[r].supplierBids[k].invitationId == vendorids1[v].vinv_id && vendorids1[v].doc_id ==  tsk_doc_id){
                         pvcode1 = vendorids1[v].pvcode;
                      }
                    }
                    
                   if(terms3.length != 0){
                    for(let it=0;it<terms3.length;it++){
                      var value2 = "value";
                          if(terms3[it].title =="HSNCode"){
                           if(Object.keys(terms3[it]).includes(value2)){
                              SACCode = terms3[it].value.simpleValue;
                           }else{
                             SACCode = "";
                           }
                         }
                           
                           
                           if(terms3[it].title == "Material Code"){
                           if(Object.keys(terms3[it]).includes(value2)){
                           ItemCode = terms3[it].value.simpleValue;
                           let match = ItemCode.match(/^\d+/); 
                           let output = match ? match[0] : null;
                           ItemCode = output;
                           }else{
                             ItemCode = "";
                           }
                           }
                          
    
                           if(terms3[it].title =="Quantity"){
                             if(Object.keys(terms3[it]).includes(value2)){
                              UOM = terms3[it].value.quantityValue.unitOfMeasureName;
                              Quantity = terms3[it].fromValue.quantityValue.amount;
                              Quantity = Quantity.toLocaleString('en-US');
                             }else{
                               Quantity = "";
                             }
                           }
                           if(terms3[it].title == "Total Cost"){
                             if(Object.keys(terms3[it]).includes(value2)){
                             l1Amount = l1Amount +  terms3[it].value.moneyValue.amount;
                             bid_currency = terms3[it].value.supplierValue.currency;
                              l3Amount = terms3[it].value.moneyValue.amount;
                              l4Amount = returnamt(l3Amount);
                             }else{
                               l1Amount = 0;
                               bid_currency = "";
                               l3Amount = 0;
                             }
                           }
                           
   
                           if(terms3[it].title =="Extended Price"){
                             if(Object.keys(terms3[it]).includes(value2)){
                              UnitPrice = terms3[it].value.supplierValue.currency;
                              Amount = terms3[it].value.supplierValue.amount;
                              if(UnitPrice == "INR"){
                              Amount = Amount.toLocaleString('en-IN');
                              Amount = returnamt(Amount);
                              }
                              if(UnitPrice == "USD"){
                               Amount = Amount.toLocaleString('en-US'); 
                               Amount = returnamt(Amount);  
                              }
                             }
                             else{
                               UnitPrice = "";
                               Amount = "";

                             }
                           }
                           
                           if(terms3[it].title == "Delivery Schedule - Quantity"){
                             if(Object.keys(terms3[it]).includes(value2)){
                               delivery_schedule = terms3[it].value.simpleValue;
                             }
                             else{
                               delivery_schedule = "";
                             }
                           }
   
                           if(terms3[it].title == "Delivery Schedule - Date"){
                             if(Object.keys(terms3[it]).includes(value2)){
                          
                               delivery_schedule1 = terms3[it].value.simpleValue;
                               if(delivery_schedule != ""){
                                 delivery_schedule = delivery_schedule + " " + delivery_schedule1;
                               }
                               final_quotear
                             }
                             else{
                               delivery_schedule = ""
                             }
                          
                           }

                           if(terms3[it].title == "Quantity Over Delivery Tolerance"){
                            
                          
                               if(Object.keys(terms3[it]).includes(value2)){
                                 tolerence = terms3[it].value.simpleValue;
                               }else{
                                 tolerence = ""
                               }
                        
                            }
   
   
                           if(terms3[it].title == "Delivery Date"){
                            if(Object.keys(terms3[it]).includes(value2)){
                              var date_obj =   terms3[it].value.dateValue;
                             date_obj = new Date(date_obj);
                              delivery_date = date_obj.toISOString().split('T')[0];
                              // delivery_date = terms3[it].value.dateValue;
                              delivery_date = returndate(delivery_date);
                            //  var input = new Date(delivery_date);
                            }else{
                              delivery_date = ""
                            }
   
                            //  // Define the days of the week and months
                            //  var daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                            //  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   
                            //  // Extract day of the week, day, month, and year
                            //  var dayOfWeek = daysOfWeek[input.getUTCDay()];
                            //  var day = input.getUTCDate();
                            //  var month = months[input.getUTCMonth()];
                            //  var year = input.getUTCFullYear();
   
                            //  // Format the date string
                            //   delivery_date = `${dayOfWeek}, ${day} ${month}, ${year}`;
   
                             // console.log(formattedDate);
   
                           }
                          
   
                           if(terms3[it].title =="Tax"){
                            if(Object.keys(terms3[it]).includes(value2)){
                              IndianTaxPER = terms3[it].value.simpleValue;
                            }else{
                              IndianTaxPER = ""
                            }
                           }
                          

                    }
                   }

                    price_details.push({
                      Proposed_Vendor_Code                                                         : `${pvcode1}`, 
                      PAN_Number                                                                   : `${tsk_doc_id}`,
                      Item_Code                                                                    : `${shrt_lst_count.payload[r].supplierBids[k].item.title}`,
                      PAN_Number                                                                   : `${tsk_doc_id}`,
                      HSN_OR_SAC_Code                                                              : `${SACCode}`,
                      Item_Short_Description                                                       : `${shrt_lst_count.payload[r].supplierBids[k].item.title}`,
                      UOM                                                                          : `${UOM}`,
                      Quantity                                                                     : `${Quantity}`,
                      Unit_Price                                                                   : `${Amount}`,
                      Amount                                                                       : `${Amount }`,
                      extendedPrice                                                                :  `${Amount}`,
                      Indian_Tax_PER                                                               : `${IndianTaxPER}`,
                      Quantity_Over_Delivery_Tolerance                                             : `${tolerence}`,
            
                   })

                   SACCode="";
                   ItemCode="";
                   ItemShortDescription="";
                   UOM="";
                   Quantity="";
                   Amount="";
                   l4Amount="";
                   extend_price="";
                   IndianTaxPER="";
                   tolerence="";





                  }
                  
                }

                 } 

              // break;
            }
            else{
              awarded_vendor = "NO"
            }
          }
         }
  

    //      console.log("stage5.5")
    //   if(price_details1.length != 0){
    //    if(price_details1[0].amount != 0){
    //     for(let j=0;j<price_details.length;j++){
    //       for(let j1=0;j1<price_details1.length;j1++){
    //         if(price_details[j].PAN_Number == tsk_doc_id && price_details1[j1].PAN_Number == tsk_doc_id){
    //           if(price_details[j].Proposed_Vendor_Code == price_details1[j1].Proposed_Vendor_Code){
    //             if( price_details[j].Item_Short_Description == price_details1[j1].item_name){
    //               var pamount = returnamt(price_details1[j1].amount)
    //               price_details[j].Amount = `${pamount}`;
    //             }
    //           }  
              
    //         }
    //       }
    //     }
    //   }
    // }
    console.log("stage5.6")
            
            var save1= 0 ;
            var amt2 = 0;
            var per_value = 0;
            var weind="";
            var web_ind =0;
            for(let w=0;w<pan_web_event.length;w++){
              if(pan_web_event[w].number == tsk_doc_id){
               web_ind = web_ind + 1;
               weind = pan_web_event[w].eventNo
              // if(pan_web_event[w].eventNo == "Last Published(Before RA)" && l1AmountObtained == 0 || pan_web_event[w].eventNo == "Last Published(Before RA)" && l1AmountObtained == 0 || pan_web_event[w].eventNo == "Last Published(Before RA)" && l1AmountObtained == 0  )
            }
            }
             
            if(web_ind == 2 && weind=="Last Published(Before RA)"){
              pan_web_event[1].l1AmountObtained = `${final_quote}`
            }else if(web_ind == 2 && weind=="Reverse Auction(RA)"){
              pan_web_event[2].l1AmountObtained = `${final_quote}`
            }
            else if(web_ind == 1){
              for(let w=0;w<pan_web_event.length;w++){
                if(pan_web_event[w].number == tsk_doc_id){
                  pan_web_event[w].l1AmountObtained = `${final_quote}`;
                }
              }
            }


        //   for(let v=0;v<vendordata1.length;v++){
        //     for(let p=0;p<price_details.length;p++){
              
        //       if(vendordata1[v].PAN_Number == tsk_doc_id && price_details[p].PAN_Number == tsk_doc_id  ){//
        //       if(vendordata1[v].Proposed_Vendor_Code == price_details[p].Proposed_Vendor_Code &&price_details[p].Amount != 0  ){
        //         vendordata1[v].Vendor_Location = price_details[p].Amount;
        //       }
        //     }
        //   }
        // }
        //     for(let v=0;v<vendordata1.length;v++){
        //      for(let f=0;f<final_quotearr.length;f++){
        //       if(vendordata1[v].PAN_Number == tsk_doc_id &&  final_quotearr[f].PAN_Number == tsk_doc_id ){
        //       if(vendordata1[v].Proposed_Vendor_Code == final_quotearr[f].Proposed_vendor_code ){
        //         vendordata1[v].Final_Quote = returnamt(final_quotearr[f].final_quote)
        //         vendordata1[v].Order_amount_OR_Split_order_amount = returnamt(final_quotearr[f].final_quote)
             
        //     }
        //   }
           
        //   }
        // }

        for(let v=0;v<pan_vendor_response.length;v++){
          for(let f=0;f<final_quotearr.length;f++){
           if(pan_vendor_response[v].PAN_Number == tsk_doc_id &&  final_quotearr[f].PAN_Number == tsk_doc_id ){
           if(pan_vendor_response[v].Proposed_Vendor_Code == final_quotearr[f].Proposed_vendor_code ){
            
            pan_vendor_response[v].Vendor_Final_Quotation_Amount = returnamt(final_quotearr[f].final_quote)
          
         }
       }
        
       }
     }



          for(let k =0;k<pan_vendor_response.length;k++){
            for(let p=0;p<vendordata1.length;p++){
              // for(let f=0;f<final_quotearr.length;f++){
              if(pan_vendor_response[k].PAN_Number == tsk_doc_id  ){
              if(pan_vendor_response[k].Proposed_Vendor_Code == vendordata1[p].Proposed_Vendor_Code ){
            
              pan_vendor_response[k].Order_Value_BKTIn_Project_CurrencyBKT =`${vendordata1[p].Order_amount_OR_Split_order_amount}`;
              pan_vendor_response[k].Order_Value_BKTIn_Bid_CurrencyBKT = `${vendordata1[p].Order_amount_OR_Split_order_amount}`;
              // pan_vendor_response[k].Vendor_Final_Quotation_Amount = `${final_quote1}`;
            }
            
           }
          // }
        }
      }
         
        //      if(ser_mate == "Material"||ser_mate == "Both"){

        //       // SAVINGS CALUCLATIONS WHEN UNSTRUCTURED DATA
              
        //       // if(pan_web_event.length !=0){
                
        //       //   if(price_details1[0].item_name == " "){
        //       //     for(let f=0;f<pan_web_event.length;f++){
        //       //       if(pan_web_event[f].number != "NA" pan_web_event[f].number != tsk_doc_id){
        //       //       for(let j= 0 ;j<item_details.length;j++){
        //       //         if(item_details[j].allocation_type == 1){
        //       //            per_value = item_details[j].allocate_per;
        //       //            amt2 = (item_details[j].totl_amt/100)*per_value;
        //       //           save1 = save1 + amt2;
        //       //              amt2 = 0;
        //       //         }
        //       //       }
        //       //     }
        //       //   save1 =  save1.toFixed(2)
        //       //   // save1 = returnamt(save1);
        //       //   // pan_web_event[f].l1AmountObtained = `${save1}`;
        //        // // if(pan_web_event[f].number != tsk_doc_id){
        //       //  //   pan_web_event[f].l1AmountObtained = `${save1}`;
        //       //  // }
        //       //   save1 = 0;

        //       //   }
                
        //       //   }
        //       // }
            

        //      // SAVINGS CALUCLATIONS WHEN STRUCTURED DATA
 
        //       if(pan_web_event.length != 0 && item_details !=[]){
        //         if(price_details1[0].item_name != " "){
        //     for(let f=0;f<pan_web_event.length;f++){
        //     if(pan_web_event[f].number != "NA" && pan_web_event[f].number != tsk_doc_id ){
        //    for(let j= 0 ;j<item_details.length;j++){
        //     for(let k = 0;k<price_details1.length;k++){
        //       if(price_details1[k].PAN_Number == pan_web_event[f].number && item_details[j].inv_id == price_details1[k].inv_id  && item_details[j].item_name == price_details1[k].item_name){

        //         if(item_details[j].allocation_type == 1){
        //            per_value = item_details[j].allocate_per;
        //           if(pan_web_event[f].eventNo == "First Published"||(pan_web_event[f].eventNo == "Last Published(Before RA)" && pan_web_event.length == 3)){
        //               amt2 = (price_details1[k].amount/100)*per_value;
        //             //  amt2 =  amt2.toFixed(2)
        //           }
                  
                   
        //           else if(pan_web_event[f].eventNo == "Reverse Auction(RA)"||(pan_web_event[f].eventNo == "Last Published(Before RA)" && pan_web_event.length == 2)){
        //             // var amt2 = (item_details[j].totl_amt/100)*per_value;
        //              amt2 = (price_details1[k].amount/100)*per_value;
        //             // amt2 =  amt2.toFixed(2)
        //           }
                  
                 
        //          save1 = save1 + amt2;
        //          amt2 = 0;
        //         }
        //         //  var save = price_details1[k].amount - item_details[j].totl_amt;
        //         //  save = Math.abs(save);
                 
        //       }
        //       // save = 0;

        //     }
        //    }
        //    save1 =  save1.toFixed(2);
        //   //  save1 = returnamt(save1);
        //    pan_web_event[f].l1AmountObtained = `${save1}`;
        //    save1 = 0;
        //   }
        //   }
        // }
        // }
        // }
        // else if(ser_mate == "Service"){
        //   if(pan_web_event.length !=0){
        //   for(let f=0;f<pan_web_event.length;f++){
        //     if(pan_web_event[f].number != "NA" pan_web_event[f].number != tsk_doc_id){
        //     for(let j= 0 ;j<item_details.length;j++){
        //       if(item_details[j].allocation_type == 1){
        //          per_value = item_details[j].allocate_per;
        //           if(pan_web_event[f].eventNo == "First Published"||(pan_web_event[f].eventNo == "Last Published(Before RA)" && pan_web_event.length == 3)){
        //             //  var amt2 = (price_details1[k].amount/100)*per_value;
        //             //  amt2 =  amt2.toFixed(2)
        //           }
                  
                   
        //           // else if(pan_web_event[f].eventNo == "Reverse Auction(RA)"||(pan_web_event[f].eventNo == "Last Published(Before RA)" && pan_web_event.length == 2)){
        //              amt2 = (item_details[j].totl_amt/100)*per_value;
        //             // amt2 =  amt2.toFixed(2)
        //           // }
                  
                 
        //          save1 = save1 + amt2;
        //          amt2 = 0;
                
        //       }

        //     }

        //     save1 =  save1.toFixed(2);
        //     save1 = returnamt(save1);
        //     pan_web_event[f].l1AmountObtained = `${save1}`;
        //     save1 = 0;
        //   }
        //   }
        //   }
        // }


              // savings = save1.toFixed(2)

         var savings1 =  baselinespend - final_quote;
        //  savings1  = Math.abs(savings1);
         savings1 =  savings1.toFixed(2)
         savings1 = returnamt(savings1)
        //  discount_amt1  =   final_quote - pan_web_event[0].l1AmountObtained;
        if(pan_web_event.length != 1 && pan_web_event.length != 0){
          if(pan_web_event[2].number != "NA"){
            discount_amt1 = pan_web_event[0].l1AmountObtained -  pan_web_event[2].l1AmountObtained;
          }
          else if(pan_web_event[1].number != "NA"){
            discount_amt1 =   pan_web_event[0].l1AmountObtained - pan_web_event[1].l1AmountObtained;
          }
          else if(pan_web_event[0].number != "NA"){
            discount_amt1 = pan_web_event[0].l1AmountObtained;
          }
        
        discount_amt1 = Math.abs(discount_amt1)
         discount_amt1 =  discount_amt1.toFixed(2)
         discount_amt1 = returnamt(discount_amt1);

        }
        else{
          discount_amt1 = 0;
        }
      for(let t=0;t<panheader.length;t++){
        if(panheader[t].PAN_Number == tsk_doc_id){
          panheader[t].Savings_achieved_btw_initial_and_final_quote = `${discount_amt1}`;
          panheader[t].Savings_against_base_line_spend_of_RFP = `${savings1}`;
          panheader[t].Final_proposed_Value = `${returnamt(final_quote)}`;
          panheader[t].Required_at_Site_Date = `${delivery_date}`;
          
        }
      }   
     
      console.log("stage5.7")

      var vendordata3=[];
      var ven_ind;
      var ven_ind1;
      vendordata3 = JSON.parse(JSON.stringify(vendordata1));
       for(let m=0;m<vendordata.length;m++){
        ven_ind = 0;
        ven_ind1 =0;
      for(let m1 = 0;m1<vendordata1.length;m1++){
        if((vendordata[m].PAN_Number == tsk_doc_id && vendordata[m].Proposed_Vendor_Code != vendordata1[m1].Proposed_Vendor_Code) || vendordata[m].PAN_Number != tsk_doc_id ){
          //  vendordata3.push(vendordata[m])
          ven_ind = 1;
         }
        
        else{
          ven_ind1 = 1;
        }
      }
         if(ven_ind == 1 && ven_ind1 == 0){
          vendordata3.push(vendordata[m])
         }
      }
       
      if(vendordata3.length !=0 && final_quotearr.length != 0){
        for(let k=0;k<vendordata3.length;k++){
          if(vendordata3[k].Awarded_Vendor=="NO" && vendordata3[k].PAN_Number == tsk_doc_id){
            na_date=[]
            na_ind=0;
            for(let k1=0;k1<version1.length;k1++){
              if(version1[k1].Proposed_vendor_code == vendordata3[k].Proposed_Vendor_Code && version1[k1].PAN_Number == tsk_doc_id){
                pcod= vendordata3[k].Proposed_Vendor_Code;
                // vendordata3[k].Original_quote = returnamt(version1[k1].final_quote);
                na_date.push(version1[k1].sub_date)
                na_ind=1;
              }
            }
            
            if(na_ind ==1){
              na_smdate = na_date.reduce((acc, curr) => curr < acc ? curr : acc, na_date[0]);
              na_date=[];       
              if(vendordata3.length != 0 &&final_quotearr.length != 0){
               for(let k=0;k<vendordata3.length;k++){
                 if(vendordata3[k].Awarded_Vendor=="NO" && vendordata3[k].PAN_Number == tsk_doc_id){
                  
                   for(let k1=0;k1<version1.length;k1++){
                     if(version1[k1].Proposed_vendor_code == vendordata3[k].Proposed_Vendor_Code && version1[k1].PAN_Number == tsk_doc_id){
                     if(version1[k1].sub_date == na_smdate ){
                       vendordata3[k].Original_quote = returnamt(version1[k1].final_quote);
                     }
                       
                       
                     }
                   }
                 }
               }
             }
       
           }
       
             else if(na_ind==0){
             if(vendordata3.length !=0 &&final_quotearr.length !=0){
             for(let k=0;k<vendordata3.length;k++){
               if(vendordata3[k].Awarded_Vendor=="NO" && vendordata3[k].PAN_Number == tsk_doc_id){
                 for(let k1=0;k1<final_quotearr.length;k1++){
                   if(final_quotearr[k1].Proposed_vendor_code == vendordata3[k].Proposed_Vendor_Code){
                     vendordata3[k].Original_quote = returnamt(final_quotearr[k1].final_quote);
                   }
                 }
               }
             }
           }
         }
        

          }
        }
      }
     
    for(let j=0;j<vendordata3.length;j++){
      if(vendordata3[j].Original_quote=="NaN"){
        vendordata3[j].Original_quote="0";
      }
      if(vendordata3[j].Awarded_Vendor == "YES"){
        tec_app = tec_app + 1;
      }
      // if(vendordata3[j]. Awarded_Vendor == "NO" && vendordata3[j].PAN_Number == tsk_doc_id){
      //   if(tec_rank.length != 0){
      //     for(let t=0;t<tec_rank.length;t++){
      //       if(tec_rank[t].PAN_Number == tsk_doc_id){
      //         if(tec_rank[t].Proposed_vendor_code == vendordata3[j].Proposed_Vendor_Code){
      //           vendordata3[j].Vendor_Location = tec_rank[t].techrank;
      //           vendordata3[j].Technically_Approved = tec_rank[t].techacc;
      //         }
      //       }
      //     }
      //   }
      // }
      

    }

    for(let p=0;p<panheader.length;p++){
      if(panheader[p].PAN_Number == tsk_doc_id){
        panheader[p].Number_of_Vendors_Technically_Qualified = `${tec_app}`
      }
    }


      for(let k = 0;k<pan_web_event.length;k++){
        if(pan_web_event[k].number !="NA"){
          pan_web_event[k].l1AmountObtained = returnamt(pan_web_event[k].l1AmountObtained);
        }
      }
      
      
      // for(let h=0;h<panheader.length;h++){
      
      //   if(panheader[h].PAN_Number == tsk_doc_id){
      //     panheader[h].Required_at_Site_Date = `${delivery_date}`;
      //   }
        
      // }


  console.log("stage6")
  var doc_id_fornow = "";



}
  // }else{
  //   return return_doc;
  // }
 
  // else{
  //    return "NO documents available for this project";
  // } 

 


  // }
 
// }else if(len1 == len){
//     return "No Pan Form Data Available"
// }


// }
// else{
//   return return_doc;
// }

  //  }

  // }
  // else{
  //   return "NO pending tasks are available for this user"
  // }
 

  // PUSHING DATA INTO PROJECTS AND DOCS TABLE
  console.log("succes till the data pushes");

     

//PAN HEADER DETAILS POST CALL

  // const response_get = await header.tx(req).get('/PAN_Details_APR');
        
    // let body3 = response_get.value[0];
    // let keys = Object.keys(body3);
    // for(let j = 0;j<panheader.length;j++){
    // for(let i = 0;i<keys.length;i++){
    //   body3[keys[i]]=panheader[j][keys[i]];
    // }
    // const response_p = await header.post('/PAN_Details_APR',body3);
    // let response = response_p;

    //   }



    // for(let j = 0;j<panheader.length;j++){
    //   let body3 = panheader[j];
    //   const response_p = await header.post('/PAN_Details_APR',body3);
    // }

    if(panheader.length != 0){
    for(let j = 0;j<panheader.length;j++){
      let body3 = JSON.parse(JSON.stringify(panheader[j]));
      let re = await SELECT.from(PAN_Details_APR).where`PAN_Number=${body3.PAN_Number}`;
      let re1 = re[0];
      if(re.length !=0){
        let num = body3.PAN_Number;
        delete body3.PAN_Number;
        let put =  await UPDATE(PAN_Details_APR,num).with(body3);
        console.log(put);
      }else{
      let r = await INSERT.into(PAN_Details_APR).entries(body3);
      console.log(r);
      }
    }
   }    


  //  const resp2 = await INSERT.into(PAN_Details_APR).entries(panheader)
  //   console.log("pandetails");
  //WEB TABLE 

  //  const response_getA = await header.tx(req).get('/PAN_WEB_EVENT_APR');
        
  //   let bodyA = response_getA.value[0];
  //   let keysA = Object.keys(bodyA);
  //   for(let j = 0;j<pan_web_event.length;j++){
  //   for(let i = 0;i<keysA.length;i++){
  //     bodyA[keysA[i]]=pan_web_event[j][keysA[i]];
  //   }
  //   const response_p = await header.post('/PAN_WEB_EVENT_APR',bodyA);
  //   let response = response_p;

  //     }

      // for(let j = 0;j<pan_web_event.length;j++){
      //   let bodyA = pan_web_event[j]
      //   const response_p = await header.post('/PAN_WEB_EVENT_APR',bodyA);
      // }

     if(pan_web_event.length != 0){
      for(let j = 0;j<pan_web_event.length;j++){
        let bodyA = JSON.parse(JSON.stringify(pan_web_event[j]));
        let we = await SELECT.from(PAN_WEB_EVENT_APR).where`PAN_Number=${bodyA.PAN_Number} and idd = ${bodyA.idd}`;
        if(we.length !=0){
          delete bodyA.PAN_Number;
          delete bodyA.idd;
          let webput = await UPDATE(PAN_WEB_EVENT_APR,({
            PAN_Number:pan_web_event[j].PAN_Number,
            idd:pan_web_event[j].idd
          })).with(bodyA);
          console.log(webput);
        }else{
        const response_p = await INSERT.into(PAN_WEB_EVENT_APR).entries(bodyA);
        console.log(response_p);
        }
      }
    }

      // const resp3 = await INSERT.into(tab2).entries(pan_web_event)

      console.log("webevent");

  // PAN TYPE TABLE
    // const response_getB = await header.tx(req).get('/PAN_TYPE_APR');
        
    // let bodyB = response_getB.value[0];
    // let keysB = Object.keys(bodyB);
    // for(let j = 0;j<pan_type.length;j++){
    // for(let i = 0;i<keysB.length;i++){
    //   bodyB[keysB[i]]=pan_type[j][keysB[i]];
    // }
    // const response_p = await header.post('/PAN_TYPE_APR',bodyB);
    // let response = response_p;

    //   }
 

      // for(let j = 0;j<pan_type.length;j++){
      //   let bodyB = pan_type[j];
      //   const response_p = await header.post('/PAN_TYPE_APR',bodyB);
      // }
       
      // const resp4 = await INSERT.into(PAN_TYPE_APR).entries(pan_type)
    //PAYMENT DETAILS POST CALL


    // const response_get1 = await item.tx(req).get('/PAN_PAYMENT_TERM_DETAILS_APR');
        
    // let body4 = response_get1.value[0];
    // let keys1 = Object.keys(body4);
    // for(let j = 0;j<payment_details.length;j++){
    // for(let i = 0;i<keys1.length;i++){
    //   body4[keys1[i]]=payment_details[j][keys1[i]];
    // }
    // const response_p = await item.post('/PAYMENT_TERM_DETAILS',body4);
    // let response = response_p;
    
    // }


    // for(let j = 0;j<payment_details.length;j++){
    //   let body4 = payment_details[j];
    //   const response_p = await item.post('/PAN_PAYMENT_TERM_DETAILS_APR',body4);
    // }
    if(payment_details.length != 0){
    for(let j = 0;j<payment_details.length;j++){
      let body4 = JSON.parse(JSON.stringify(payment_details[j]));
      let pd= await SELECT.from(PAN_PAYMENT_TERM_DETAILS_APR).where`PAN_Number=${body4.PAN_Number} and iddd = ${body4.iddd} and Proposed_Vendor_Code = ${body4.Proposed_Vendor_Code}`;
      if(pd.length !=0){
        delete body4.PAN_Number;
        delete body4.iddd;
        delete body4.Proposed_Vendor_Code;
        let uppd = await UPDATE(PAN_PAYMENT_TERM_DETAILS_APR,({
          PAN_Number:payment_details[j].PAN_Number,
          iddd:payment_details[j].iddd,
          Proposed_Vendor_Code:payment_details[j].Proposed_Vendor_Code
        })).with(body4);
        console.log(uppd);
      }else{
        let pdins = await INSERT.into(PAN_PAYMENT_TERM_DETAILS_APR).entries(body4);
        console.log(pdins);
      }
    }
  }

    // const resp5 = await INSERT.into(PAN_PAYMENT_TERM_DETAILS_APR).entries(payment_details)
    
     //vendor DATA POST CALL
     console.log("paymentdetails");

    // const response_get3 = await item.tx(req).get('/PAN_vendor_data_APR');
    // let body6 = response_get3.value[0];
    // let keys3 = Object.keys(body6);
    // for(let j = 0;j<vendordata.length;j++){
    // for(let i = 0;i<keys3.length;i++){
    //   body6[keys3[i]]=vendordata[j][keys3[i]];
    // }
    
    // const response_p = await item.post('/PAN_vendor_data_APR',body6);
    // let response = response_p;

    // }

    // for(let j = 0;j<vendordata3.length;j++){
    //   let body6 = vendordata3[j];
    //   const response_p = await item.post('/PAN_vendor_data_APR',body6);
    // }
    let res_body="";
    if(vendordata3.length != 0){
    for(let j = 0;j<vendordata3.length;j++){
      if(pan_vendor_response.length != 0){
        for(let r=0;r<pan_vendor_response.length;r++){
          if(vendordata3[j].PAN_Number==pan_vendor_response[r].PAN_Number && vendordata3[j].Proposed_Vendor_Code==pan_vendor_response[r].Proposed_Vendor_Code ){
             res_body =JSON.parse(JSON.stringify(pan_vendor_response[r]));
          }
        }
        
      }
      let body6 = JSON.parse(JSON.stringify(vendordata3[j]));
      let vd = await SELECT.from(PAN_vendor_data_APR).where`PAN_Number = ${body6.PAN_Number} and Proposed_Vendor_Code=${body6.Proposed_Vendor_Code}`;
      delete res_body.PAN_Number;
      delete res_body.Proposed_Vendor_Code;
      let fin_body = {
        ...vendordata3[j],
        ...res_body
      }
      if(vd.length !=0){
          delete body6.PAN_Number;
          delete body6.Proposed_Vendor_Code;
         
          let vdput = await UPDATE(PAN_vendor_data_APR,({
            PAN_Number:vendordata3[j].PAN_Number,
            Proposed_Vendor_Code:vendordata3[j].Proposed_Vendor_Code
          })).with(fin_body);
          console.log(vdput);
      }else{
        const response_p = await INSERT.into(PAN_vendor_data_APR).entries(fin_body);
        console.log(response_p);
      }
      
    }
  }
    // for(let j = 0;j<vendordata.length;j++){
    //   let body0 = vendordata[j];
    //   const response_p0 = await item.post('/PAN_vendor_data_APR',body0);
    // }


    // const resp6 = await INSERT.into(PAN_vendor_data_APR).entries(vendordata1)
    // const resp7 = await INSERT.into(PAN_vendor_data_APR).entries(vendordata)
    console.log("vendordata");
  //VENDOR RESPONSE
  
  
    // const response_get2 = await item.tx(req).get('/PAN_vendor_response_APR');
    // let body5 = response_get2.value[0];
    // let keys2 = Object.keys(body5);
    // for(let j = 0;j<pan_vendor_response.length;j++){
    // for(let i = 0;i<keys2.length;i++){
    //   body5[keys2[i]]=pan_vendor_response[j][keys2[i]];
    // }
    // const response_p = await item.post('/PAN_vendor_response_APR',body5);
    // let response = response_p;

    // }



    // for(let j = 0;j<pan_vendor_response.length;j++){
    //   let body5 = pan_vendor_response[j];
    //   const response_p = await item.post('/PAN_vendor_response_APR',body5);
    // }
    if(pan_vendor_response != 0){
    for(let j = 0;j<pan_vendor_response.length;j++){
      let body5 = JSON.parse(JSON.stringify(pan_vendor_response[j]));
      let pdr = await SELECT.from(PAN_vendor_response_APR).where`PAN_Number = ${body5.PAN_Number} and Proposed_Vendor_Code=${body5.Proposed_Vendor_Code}`;
      if(pdr.length !=0){
        delete body5.PAN_Number;
        delete body5.Proposed_Vendor_Code;
        let pvr = await UPDATE(PAN_vendor_response_APR,({
          PAN_Number:pan_vendor_response[j].PAN_Number,
          Proposed_Vendor_Code:pan_vendor_response[j].Proposed_Vendor_Code
        })).with(body5);
        console.log(pvr);
      }else{
      const response_p = await INSERT.into(PAN_vendor_response_APR).entries(body5);
      console.log(response_p);
      }
    }
  }

    // const resp8 = await INSERT.into(PAN_vendor_response_APR).entries(pan_vendor_response)
    console.log("vendorresponse");

    

    //PRICE DETAILS


    // const response_get4 = await item.tx(req).get('/PAN_PRICE_DETAILS_APR');
    // let body7 = response_get4.value[0];
    // let keys4 = Object.keys(body7);
    // for(let j = 0;j<price_details.length;j++){
    // for(let i = 0;i<keys4.length;i++){
    //   body7[keys4[i]]=price_details[j][keys4[i]];
    // }
    // const response_p = await item.post('/PAN_PRICE_DETAILS_APR',body7);
    // let response = response_p;
    
    // }

    // for(let j = 0;j<price_details.length;j++){
    //   let body7 = price_details[j];
    //   const response_p = await item.post('/PAN_PRICE_DETAILS_APR',body7);
    // }
    var qind=0;
    var body7 
    if(price_details.length != 0){
    for(let j = 0;j<price_details.length;j++){
      if(price_details[j].Item_Code != " "){
       body7 = JSON.parse(JSON.stringify(price_details[j]));
      let pd = await SELECT.from(PAN_PRICE_DETAILS_APR).where`PAN_Number = ${body7.PAN_Number} and Proposed_Vendor_Code = ${body7.Proposed_Vendor_Code} and Item_Code = ${body7.Item_Code}`;
      let del = await DELETE.from(PAN_PRICE_DETAILS_APR).where`PAN_Number = ${body7.PAN_Number} and Proposed_Vendor_Code = ${body7.Proposed_Vendor_Code} and Item_Code = ${body7.Item_Code}`;
      // if(pd.length != 0){
       
      //   for(let p=0;p<pd.length;p++){
      //     if(pd[p].Quantity == body7.Quantity){
      //      qind =1;
      //     }
      //   }
      // }
      //   if(pd.length != 0 && qind == 1){
      //   delete body7.PAN_Number;
      //   delete body7.Proposed_Vendor_Code;
      //   delete body7.Item_Code;
      //   let putpd= await  UPDATE(PAN_PRICE_DETAILS_APR,({
      //     PAN_Number:price_details[j].PAN_Number,
      //     Proposed_Vendor_Code:price_details[j].Proposed_Vendor_Code,
      //     Item_Code:price_details[j].Item_Code
      //   })).with(body7);
        // console.log(putpd);
        }
      }
      // else{
        // if( qind==0){
          let pd = await SELECT.from(PAN_PRICE_DETAILS_APR);
          for(let j = 0;j<price_details.length;j++){
            body7 = JSON.parse(JSON.stringify(price_details[j]));
            // if(price_details[j].PAN_Number == body7.PAN_Number && price_details[j].Proposed_Vendor_Code == body7.Proposed_Vendor_Code &&  price_details[j].Item_Code == body7.Item_Code){
              const response_p = await INSERT.into(PAN_PRICE_DETAILS_APR).entries(body7);
              console.log(response_p);
            // }
     
        // }
      // }
    }
    // }
  }
    // const resp9 = await INSERT.into(PAN_PRICE_DETAILS_APR).entries(price_details)
    console.log("pricedetails");
  
  if(vendortaxdetails.length != 0){
    for(let j=0;j<vendortaxdetails.length ;j++){
      let body8 = JSON.parse(JSON.stringify(vendortaxdetails[j]));
      vtd = await SELECT.from(vendorTaxDetails_APR).where`PAN_Number = ${body8.PAN_Number} and Proposed_Vendor_Code = ${body8.Proposed_Vendor_Code} and Item_Code = ${body8.Item_Code}`;
      if(vtd.length != 0){
        delete body8.PAN_Number;
        delete body8.Proposed_Vendor_Code;
        delete body8.Item_Code;
        let putvtd= await  UPDATE(vendorTaxDetails_APR,({
          PAN_Number:vendortaxdetails[j].PAN_Number,
          Proposed_Vendor_Code:vendortaxdetails[j].Proposed_Vendor_Code,
          Item_Code:vendortaxdetails[j].Item_Code
        })).with(body8);
        console.log(putvtd);
      }else{
        const response_tax = await INSERT.into(vendorTaxDetails_APR).entries(body8);
        console.log(response_tax);
      }

    }
  }






    //CLEARING ALL THE ARRAYS
    projects_docs =[];
    panheader = [];
    pan_web_event = [];
    pan_type = [];
    payment_details = [];
    vendordata = [];
    pan_vendor_response = [];
    price_details = [];
 
  // }
    return tsk_doc_id;
}
catch(e){
  if("message" in e){
    console.log(e.message);
    return e.message;
  }else{
    return e;
  }
  
}
  });

  });

}else{

  (async () => {
    const getcall = await cds.connect.to('getcall');
    console.log("async call");
    try{
    getcall.destination.headers.url = workerData.url;
    getcall.destination.headers.query = workerData.query;
    getcall.destination.headers.basis = workerData.basis;
    
    let teams = await getcall.get('/getcall');
    parentPort.postMessage(teams);
    }catch(e){
      // return e
      // break;
      // continue
      parentPort.postMessage(e);
    }
    
})();

}


