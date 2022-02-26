export interface HandleFeatureFlagChangeModel {
  pageCategory: string;
  page: string;
  child: string;
  value?: boolean;
  maxCount?: number;
  type: string;
}
