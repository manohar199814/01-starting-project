

export default function Tabs({children , content , DynamicWrapper }) {
    return <>
        <DynamicWrapper> {content} </DynamicWrapper>
        {children}
    </>
}