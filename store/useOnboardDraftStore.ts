import { create } from 'zustand'
import { persist }  from 'zustand/middleware'
import { OnboardingDraft } from '@/types/onboarding/onboarding'


type ListFieldKey = "preferred_countries" | "preferred_funding" | "preferred_fields";
type FileFieldKey = "avatar" | "resume_cv" | "academic_transcript" | "recommendation_letter" | "personal_statement";

interface OnboardDraft {
    draft:OnboardingDraft;
    updateField: <K extends keyof OnboardingDraft>(key: K, value: OnboardingDraft[K]) => void;
    toggleListItem: (key:ListFieldKey, value:string) => void;
    setFile: (key:FileFieldKey, file:File | null) => void;
    clearDraft:() => void;
}

const INITIAL_DRAFT:OnboardingDraft = {
    preferred_countries: [],
    preferred_funding: [],
    preferred_fields: []
}

export const useOnboardingStore = create<OnboardDraft>()(
    persist((set) => ({

        // set the initial draft state to empty object for all fields except initialized list as empty array.
        draft: INITIAL_DRAFT,

        // update existing field in the draft object, overwrite the value with the key and value provided.
        updateField: (key, value) => set((state) => ({
            draft: {...state.draft, [key]: value} as OnboardingDraft,
        })),

        // toggle data in the list field, avoid duplicate values in the list
        toggleListItem: (key, value) => set((state) => {
            const current = state.draft[key]; 
            const next = current.includes(value) ? current.filter(item => item !== value) : [...current, value];
            return { draft: {...state.draft, [key]: next} };
        }),

        // set file for a specific field
        setFile: (key, file) => set((state) => ({
            draft: {...state.draft, [key] : file },
        })),
        
        // clear draft, reset to initial draft state
        clearDraft: () => set({ draft: INITIAL_DRAFT }),

    }),
        // deselect files types because files can't be serialized as JSON, only the not chosen in here will be persisted in the local storage, the rest will be lost on refresh or reload.
        {
            name: "onboarding-draft",
            partialize: (state) => {
                const {
                    avatar,
                    resume_cv,
                    academic_transcript,
                    recommendation_letter,
                    personal_statement,
                    ...persistable
                } = state.draft;
                return { draft: persistable };
            }
        }
    )
)