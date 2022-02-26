import { FlagWrapper, Caret, Select } from "./feature-flag.styles";
import ToggleSwitch from "../toggle-switch";
import { HandleFeatureFlagChangeModel } from "../../models/handle-feature-flag-change.interface";
import { camelCaseToSpaceSeperated } from "../../utils";

interface FeatureItemProps {
  featureFlags: any;
  pageCategory: string;
  page: string;
  child?: string;
  height?: string;
  width?: string;
  fieldChanged: (params: HandleFeatureFlagChangeModel) => void;
}

export const FlagItem: React.FC<FeatureItemProps> = ({
  featureFlags,
  page,
  pageCategory,
  child,
  height,
  width,
  fieldChanged,
}: FeatureItemProps) => {
  return (
    <FlagWrapper width={width} height={height}>
      <p>{camelCaseToSpaceSeperated(child ? child : page)}</p>

      {(child
        ? typeof featureFlags?.[pageCategory]?.[page]?.children[child]
            .maxCount === "number"
        : typeof featureFlags?.[pageCategory]?.[page]?.maxCount ===
          "number") && (
        <Select
          name={child ? child : page}
          value={
            child
              ? featureFlags?.[pageCategory]?.[page]?.children[child].maxCount
              : featureFlags?.[pageCategory]?.[page]?.maxCount
          }
          onChange={(e) =>
            fieldChanged({
              pageCategory,
              page,
              child: child || "",
              maxCount: Number(e.target.value),
              type: child ? "child-page-maxcount" : "page-maxcount",
            })
          }
        >
          {[...Array(10)].map((_, num) => (
            <option key={num} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </Select>
      )}
      <div style={{ display: "flex" }}>
        <ToggleSwitch
          pageCategory={pageCategory}
          page={page}
          child={child}
          value={
            child
              ? featureFlags?.[pageCategory]?.[page]?.children[child].value
              : featureFlags?.[pageCategory]?.[page]?.value
          }
          fieldChanged={fieldChanged}
        />
        {!child && featureFlags?.[pageCategory]?.[page]?.children && (
          <Caret>
            {featureFlags?.[pageCategory]?.[page]?.value ? (
              <span>&#8743;</span>
            ) : (
              <span>&#8744;</span>
            )}
          </Caret>
        )}
      </div>
    </FlagWrapper>
  );
};
