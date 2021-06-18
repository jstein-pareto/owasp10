export const styles = {
    riskGrid:{
        display:'grid',
        gridTemplateColumns: '2fr 3fr 2fr',
        gridTemplateRows: 'repeat(3, auto)',
        columnGap: 0,
        rowGap: 0,
        margin: 0,
        padding: 0,
    },
    riskGroup:{
        display:'flex',
        flexFlow:'column nowrap',
        // border:'1px solid black',
        // borderLeft:'1px solid black',
        // margin: '0 0.25rem',
        padding: 0,
        '&:first-of-type': {
            // borderLeft:'none',
        },
    },
    riskGroupLabel:{
        textAlign: 'center',
        textTransform: 'uppercase',
        borderBottom:'1px solid black',
        marginLeft: '0.25rem',
        marginRight: '0.25rem',
        // padding: 0,
    },
    riskTypes:{
        display:'flex',
        flexFlow:'row nowrap',
        flex:'1 0 auto',
    },
    riskItem: {
        display:'flex',
        flexFlow:'column nowrap',
        border:'1px solid black',
        margin: '0 0.25rem 0.25rem',
        padding: 0,
    },
    severity:{
        fontSize:'1.5rem',
        fontWeight:'700',
        margin: '0 -0.1 25rem',
        padding: 0,
        '&:before': {
            fontSize:'1rem',
            fontWeight:'500',
            content:'severity: ',
        },
    },
    severity0:{
        backgroundColor:'rgba(127,127,127,0.5)',
        borderColor:'rgba(127,127,127,1)',
    },
    severity1:{
        backgroundColor:'rgba(255,255,0,0.5)',
        borderColor:'rgba(255,255,0,1)',
    },
    severity2:{
        backgroundColor:'rgba(255,127,0,0.5)',
        borderColor:'rgba(255,127,0,1)',
    },
    severity3:{
        backgroundColor:'rgba(255,0,0,0.5)',
        borderColor:'rgba(255,0,0,1)',
    },
    heading:{
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: '0',
        padding: '1rem 1rem 0 1rem',
    },
    label: {
        fontWeight: '700', 
        fontSize: '0.75em', 
        display: 'none',
    },
    tableLabel: {
    },
    
}
export default styles