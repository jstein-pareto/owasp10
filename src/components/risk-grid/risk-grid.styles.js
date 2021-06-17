export const styles = {
    riskGrid:{
        display:'grid',
        // flexFlow:'row nowrap',
        gridTemplateColumns: '1fr 2fr 1fr',
        gridTemplateRows: 'repeat(3, auto)',
        // columnGap: '3px',
        // rowGap: '3px',
        // gridTemplateAreas:
        //     'label-name'
        //     'label-severity'
        //     'label-description;
        margin: 0,
        padding: 0,
    },
    riskGroup:{
        display:'flex',
        flexFlow:'column nowrap',
        border:'1px solid black',
        // borderLeft:'1px solid black',
        margin: '0 0.25rem',
        padding: 0,
        '&:first-of-type': {
            // borderLeft:'none',
        },
    },
    riskGroupLabel:{
        textAlign: 'center',
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
        margin: '0 0.25rem 0.25rem',
        padding: 0,
    },
    severity:{
        fontSize:'1.5rem',
        fontWeight:'700',
        '&:before': {
            fontSize:'1rem',
            fontWeight:'500',
            content:'severity: ',
        },
    },
    severity0:{
        backgroundColor:'rgba(255,0,0,0.5)',
    },
    severity1:{
        backgroundColor:'rgba(255,255,0,0.5)',
    },
    severity2:{
        backgroundColor:'rgba(255,127,0,0.5)',
    },
    severity3:{
        backgroundColor:'rgba(255,0,0,0.5)',
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