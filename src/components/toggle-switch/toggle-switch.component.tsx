import {
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel,
} from "./toggle-switch.styles";
import { HandleFeatureFlagChangeModel } from "../../models/handle-feature-flag-change.interface";

interface ToggleSwitchProps {
  page: string;
  child?: string;
  value: boolean;
  pageCategory: string;
  fieldChanged: (params: HandleFeatureFlagChangeModel) => void;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  value,
  pageCategory,
  page,
  child,
  fieldChanged,
}: ToggleSwitchProps) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={child ? child : page}
        type="checkbox"
        name={child ? child : page}
        checked={value}
        onChange={(e) =>
          fieldChanged({
            pageCategory,
            page,
            child: child || "",
            value: e.target.checked,
            type: child ? "child-page-value" : "page-value",
          })
        }
      />
      <CheckBoxLabel htmlFor={child ? child : page} />
    </CheckBoxWrapper>
  );
};

export default ToggleSwitch;
