import { useState } from "react";
import { HandleFeatureFlagChangeModel } from "../../models/handle-feature-flag-change.interface";
import {
  Form,
  SubmitButton,
  SubmitButtonWrapper,
} from "./feature-flag-form.styles";
import { RenderFormElements } from "./render-form-elements.component";

interface FeatureFlagFormProps {
  data: any;
}

const FeatureFlagForm: React.FC<FeatureFlagFormProps> = ({
  data,
}: FeatureFlagFormProps) => {
  const [formValue, setformValue] = useState(data);

  const fieldChanged = (param: HandleFeatureFlagChangeModel): void => {
    const data = { ...formValue };
    switch (param.type) {
      case "page-value":
        data[param.pageCategory][param.page].value = param.value;
        if (!param.value) {
          data[param.pageCategory][param.page].children &&
            Object.keys(
              data[param.pageCategory][param.page].children ?? {}
            ).forEach((item) => {
              data[param.pageCategory][param.page].children[item].value = false;
            });
        }
        break;
      case "page-maxcount":
        data[param.pageCategory][param.page].maxCount = param.maxCount;
        break;
      case "child-page-value":
        data[param.pageCategory][param.page].children[param.child].value =
          param.value;
        break;
      case "child-page-maxcount":
        data[param.pageCategory][param.page].children[param.child].maxCount =
          param.maxCount;
        break;
    }

    setformValue({ ...data });
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(formValue, "formValue");
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <RenderFormElements data={formValue} fieldChanged={fieldChanged} />
      <SubmitButtonWrapper>
        <SubmitButton type="submit">Submit Form</SubmitButton>
      </SubmitButtonWrapper>
    </Form>
  );
};

export default FeatureFlagForm;
