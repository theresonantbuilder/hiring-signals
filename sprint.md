# Sprint: Sourcing Layer Audit Update

## Objective
Update "The Sourcing Layer" (Layer 01) in the Signal Audit to use a detailed, interactive survey format.

## Requirements

### 1. Content Update
Replace the current "Sourcing Layer" content with the following structure:

#### 1. Infrastructure Check: How do you build your pipeline?
*   **A. Defining the Role**
    *   **Question:** How is the role defined and written before it hits the market?
    *   **Options:**
        *   [ ] Manual: We use legacy templates or Word docs from HR/Hiring Managers.
        *   [ ] Augmented: We use non-AI optimization tools for bias and market appeal.
            *   Textio
            *   Datapeople
            *   Other: _________
        *   [ ] Agentic: We use AI-driven "Intake Intelligence" to build technical maps of the role.
            *   Metaview (Hiring Studio)
            *   Juicebox
            *   Other: _________

*   **B. Broadcasting the Role**
    *   **Question:** How do you distribute the role to the talent market?
    *   **Options:**
        *   [ ] Manual Posting: We manually post to individual boards.
        *   [ ] Programmatic / Automated: We use services to aggregate and distribute postings.
            *   JobTarget
            *   Appcast
            *   PandoLogic
            *   Other: _________
        *   [ ] Niche Distribution: We focus on developer or community-specific platforms.
            *   GitHub
            *   Otta
            *   StackOverflow

*   **C. Finding the Candidates**
    *   **Question:** How do you identify talent who haven't applied yet?
    *   **Options:**
        *   [ ] Search-Based: We use standard filters and Boolean strings.
            *   LinkedIn Recruiter
            *   Indeed
            *   Monster
            *   Dice
            *   Career Builder
            *   Other
        *   [ ] Discovery Automation: We use tools to automate the "Find and Contact" loop.
            *   SeekOut
            *   Findem
            *   Loxo / Fetcher
        *   [ ] Agentic Search: We use AI to find talent via natural language, intent, and context.
            *   Juicebox (PeopleGPT)
            *   Metaview (Agentic Search)

*   **D. Storing Candidate Information**
    *   **Question:** Where does the data ultimately live? What ATS do you currently use?
    *   **Options:**
        *   Greenhouse
        *   ICIMS
        *   Bullhorn
        *   Ashby
        *   Smart Recruiters
        *   Workday
        *   Other

*   **Q & A**
    *   **Question:** What do you think is missing in your current tech stack to identify quality talent?
    *   **Input:** Comment field + Audio Recording.

#### 2. Strategy Check
*   **Who Writes the JD?**
    *   ( ) HR / Administrative: Focused on compliance and generic requirements.
    *   ( ) The Hiring Manager: Focused on a subjective "wishlist."
    *   ( ) AI-Architected: Built using intake intelligence to map actual role logic.
*   **How are applications generated?**
    *   [ ] We manually create an application and post on our site or social
    *   [ ] Application is generated from our ATS
*   **How do you find 'Passive' Talent?**
    *   ( ) Reactive: We wait for them to apply or appear on a basic LinkedIn search.
    *   ( ) Predictive: We use Agentic Search to live-monitor "Ghost Signals" (funding, layoffs, patents).
*   **What is your Recruiter Filter?**
    *   ( ) Manual: Recruiters spend hours sifting through resumes to find a "fit."
    *   ( ) Inference: AI surfaces the top 5% of candidates based on behavioral history, not just keywords.
*   **Q & A**
    *   **Question:** What do you think is missing in your current strategy to identify quality talent?
    *   **Input:** Comment field + Audio Recording.

## Functional Requirements
*   **Interactive Selection:**
    *   Allow users to select main options and sub-options.
    *   **Visual State:** Selected items should turn **blue**.
*   **"Other" Fields:**
    *   All options with "Other" must have an inline text input field for user entry.
*   **Comments:**
    *   Add a text area for comments above the "Record Answer" button in the Q&A sections.

### 3. Data Storage & Notification (Vercel Integration)
*   **Backend Handler:**
    *   Create a Vercel Serverless Function (e.g., `api/submit-audit.js`) to handle form submissions.
*   **Storage:**
    *   Use **Vercel Blob** to store the generated JSON report and any recorded audio files.
*   **Notification:**
    *   Integrate an email service (e.g., **Resend** or **SendGrid**) within the serverless function.
    *   Trigger an email to the admin containing the download link for the JSON report (from Vercel Blob) whenever a new audit is submitted.