export type ModalStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export interface ModalState {
  isVisible: boolean
  currentStep: ModalStep
  ratings: {
    groupChallenge: number
  }
  improvement: string
  researchConsent: boolean
  email: string
}