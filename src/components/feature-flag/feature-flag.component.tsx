import { Content, Container } from "./feature-flag.styles";
import { HandleFeatureFlagChangeModel } from "../../models/handle-feature-flag-change.interface";
import { FlagItem } from "./feature-item.component";

interface FeatureFlagProps {
  featureFlags: any;
  pageCategory: string;
  page: string;
  fieldChanged: (params: HandleFeatureFlagChangeModel) => void;
}

const FeatureFlag: React.FC<FeatureFlagProps> = ({
  featureFlags,
  page,
  pageCategory,
  fieldChanged,
}: FeatureFlagProps) => {
  return (
    <Container>
      <FlagItem
        featureFlags={featureFlags}
        page={page}
        pageCategory={pageCategory}
        fieldChanged={fieldChanged}
      />
      {featureFlags?.[pageCategory]?.[page]?.value &&
        featureFlags?.[pageCategory]?.[page]?.children && (
          <Content>
            {Object.keys(
              featureFlags?.[pageCategory]?.[page]?.children ?? {}
            ).map((child) => (
              <FlagItem
                key={child}
                page={page}
                child={child}
                pageCategory={pageCategory}
                featureFlags={featureFlags}
                height={"45px"}
                width={"90%"}
                fieldChanged={fieldChanged}
              />
            ))}
          </Content>
        )}
    </Container>
  );
};

export default FeatureFlag;
