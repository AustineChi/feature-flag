import { HandleFeatureFlagChangeModel } from "../../models/handle-feature-flag-change.interface";
import { camelCaseToSpaceSeperated } from "../../utils";
import FeatureFlag from "../feature-flag/feature-flag.component";
import { CategoryTitle, SectionWrapper } from "./feature-flag-form.styles";

interface RenderFormelementProps {
  data: any;
  fieldChanged: (params: HandleFeatureFlagChangeModel) => void;
}

export const RenderFormElements = ({
  data,
  fieldChanged,
}: RenderFormelementProps) => {
  return (
    <>
      {Object.keys(data).map((prop) => (
        <div key={prop}>
          <CategoryTitle>{camelCaseToSpaceSeperated(prop)}</CategoryTitle>
          <SectionWrapper
            displayType={
              Object.keys(data[prop]).length > 2 ? "grid" : "vertical"
            }
          >
            {Object.keys(data[prop] ?? {}).map((item) => (
              <FeatureFlag
                key={item}
                featureFlags={data}
                page={item}
                fieldChanged={fieldChanged}
                pageCategory={prop}
              />
            ))}
          </SectionWrapper>
        </div>
      ))}
    </>
  );
};
