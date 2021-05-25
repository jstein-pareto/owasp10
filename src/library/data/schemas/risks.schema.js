export const schemaRisks = {
    title:'',
    subtitle:'',
    description:'',
    vectors:{
        threatAgents:'', // string
        exploitability:null, // [1,2,3]
        description:'',
    },
    weaknesses:{
        prevelance:null, // [1,2,3]
        detectability:null, // [1,2,3]
        description:'',
    },
    impacts:{
        technical:null, // [1,2,3]
        business:'', // string
        description:'',
    },
}
export default schemaRisks