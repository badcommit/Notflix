import {ROLE} from "../../../core/service/auth";

export interface SubPlanDetail {

  readonly name: string
  readonly monthly_price: number

  readonly video_quality: "Great" | "Best"

  readonly resolution: "1080p" | "4K+HDR"

  readonly watch_device: boolean

  readonly download: boolean
  readonly role: ROLE
}

export type PropDescriptor = {
  desc: string,
  order: number,
  hidden: boolean,
  pre_unit?: string,
  type: string
}
export type Descriptor<T> = {
  [V in keyof T]: PropDescriptor
}


export const plan_prop_description: Descriptor<SubPlanDetail> = {
  monthly_price: {
    desc: "Monthly price",
    order: 0,
    hidden: false,
    pre_unit: '$',
    type: "number"
  },
  video_quality: {
    desc:"Video quality",
    order: 1,
    hidden: false,
    type: "string"
  },
  resolution: {
    desc: 'Resolution',
    order: 2,
    hidden: false,
    type: "string"
  },
  download: {
    desc: 'Downloads',
    order: 4,
    hidden: false,
    type: "boolean"
  },
  watch_device: {
    desc: 'Watch on your TV, computer, mobile phone and tablet',
    order: 3,
    hidden: false,
    type: "boolean"
  },
  name: {
    desc: 'premium name',
    order: 5,
    hidden: true,
    type: "string"
  },
  role: {
    desc: 'role',
    order: 6,
    hidden: true,
    type: "string"
  }
}

export const premium: SubPlanDetail = {
  name: 'Premium',
  monthly_price: 19.99,
  video_quality: "Best",
  watch_device: true,
  download: true,
  resolution: "4K+HDR",
  role: "ADMIN"
}

export const standard: SubPlanDetail = {
  name: 'Standard',
  monthly_price: 15.49,
  video_quality: "Great",
  watch_device: true,
  download: true,
  resolution: "1080p",
  role: "SUPERUSER"
}

export const standardWithAds: SubPlanDetail = {
  name: 'Standard With Ads',
  monthly_price: 6.99,
  video_quality: "Great",
  resolution: "1080p",
  watch_device: true,
  download: false,
  role: "USER"
}



export const availableSubPlan = [
  standardWithAds,
  standard,
  premium
]






