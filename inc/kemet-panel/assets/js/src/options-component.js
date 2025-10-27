import CustomizerItem from "./common/CustomizerItem";
export const RenderStaticOptions = ({ options }) => {
    return <div className="kmt-options">
        {Object.keys(options).map((optionId) => {
            const option = options[optionId];
            return <CustomizerItem id={optionId} params={option} />;
        })}
    </div>
}
