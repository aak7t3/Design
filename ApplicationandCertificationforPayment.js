// playground requires you to assign document definition to a variable called dd

var dd = {
    
    pageOrientation: 'landscape',
//function for page number
function(currentPage, pageCount) { return currentPage.toString() + ' of ' + pageCount; },

	content: [
	    
	    {text: 'APPLICATION AND CERTIFICATION FOR PAYMENT', style: 'header'},
	    {text:'AIA DOCUMENT G702'},
//End Page# FN	   
	   
	   
//Line	   
	   {
    table: {
            widths: ['*'],
            body: [[" "], [" "]]
    },
    layout: {
        hLineWidth: function(i, node) {
            return (i === 0 || i === node.table.body.length) ? 0 : 2;
        },
        vLineWidth: function(i, node) {
            return 0;
        },
    }
},
//end line	 	 		
{
			alignment: 'center',
			columns: [
				
				{
					width: 'auto',
					text: 'To Owner:' +'\n \n From Contractor:' + '\n \n'
					
					
				},
				{
					width: 'auto',
					text: '$ownerInfo' + '\n \n'
					+ 'Allied Waterproofing \n'
					+'5840 Mango Drive \n' 
					+ 'St. Louis MO 63129'
				},
				
				{
					width: '*',
					text: 'Project: \n' + 
					'$projectName' +'\n\n' +
					'Via Architect: \n' +
					'$architectName'
				},

				
				
				{
					width: 'auto',
					text: 'Application Number: \n' 
					+ '$appNum'
				},
				{
					width: '*',
					text: 'Distribution to: \n' + 
					'___Owner \n' + 
					'___Architecht \n' + 
					'___Contractor \n'
				},
			
			],

		},
		
//Line	   
{
    table: {
            widths: ['*'],
            body: [[" "], [" "]]
    },
    layout: {
        hLineWidth: function(i, node) {
            return (i === 0 || i === node.table.body.length) ? 0 : 2;
        },
        vLineWidth: function(i, node) {
            return 0;
        },
    }
},
//end line	
 {text: "Contractor's Application for Payment", style: 'header'},
		//Row 1
		{
		 	    columns:[
		        {   width:'*',
		            style:'small',
		            text:"Application is made for payment, as show below, in connection with the Contract. Continuation Sheet, AIA Document G703 is attached"
		          		  },

		        {   style:'small',
		            width:'*',
		            text:"The undersigned Contractor certifies that to the best of the Contractor's knowledge, information and belief the work covered by this application for payment has been completed in accordance with the contract documents, that all amounts have been paid the contractor for work for which previous certificates of for payment were issued and payments received from the owner, and that current payment shown herein is now due",
		                    },
		       
		        ]
		},
		//Row 2
		{
		    columns:[
		  {
		     
		  },     
		
		{
		      width: '*',
		     columns:[
		         {text:'Contractor: \n' + "By: ____________________"},
		         {text:'\n' + "Date: _________________ " },
		         
		         ]
		         
		  },     
		  
		        
		       
		        ]
		},
	    	    {
	            columns:[
		         {  width:"auto",
		            
		             columns:[
		                    {
		                        width: '*',
		                        text: "Original Contract Sum \n"
		                        +"Net change by change orders \n"
		                        +"Contract sum to date (lines 1+2) \n"
		                        +"Total completed and stored to date \n"
		                        +"Retainage \n"
		                        +"___5% Completed \n",
		                        
		                    },

		                    {
		                        width: '*',
		                        decoration: 'underline',
		                        text: "$" + "$contractSum \n"
		                        + "$" + "$netChange \n"
		                        + "$" + "$contractSumTD \n"
		                        + "$" + "$totalCompTD \n"
		                        + "$" + "$netChange \n"
		                        + "$" + "$netChange \n"
		                        + "$" + "$netChange \n",
		                        
		                    },
		                    ]
		            },
		            
		            {
    table: {
            widths: ['*'],
            body: [[" "], [" "]]
    },
    layout: {
        hLineWidth: function(i, node) {
            return (i === 0 || i === node.table.body.length) ? 0 : 2;
        },
        vLineWidth: function(i, node) {
            return 0;
        },
    }
},
		            
		            ]
		            
	    },
		 
		         
		         
		    
		
		
		
		

	], //end Content
	styles: {
		header: {
			fontSize: 18,
			bold: true
		},
		bigger: {
			fontSize: 15,
			italics: true
		},
			small: {
			fontSize: 8,
			italics: true
		}
	},
	defaultStyle: {
		columnGap: 20
	},
	defaultMargin: {
			margin: [5, 5, 5, 5],
			fontSize: 15
		}

	
}
