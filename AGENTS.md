# AI Assistance Guidelines for Senior Developers

These guidelines apply to the entire repository. Follow them whenever collaborating with AI tooling.

## Collaboration Principles
- Treat AI suggestions as drafts; verify logic, security, and performance implications before accepting.
- Prefer small, reviewable changes with clear intent and rationale captured in commit messages.
- Keep human ownership: do not merge code you do not fully understand.
- Maintain consistency with existing patterns and architecture before introducing new abstractions.

## Workflow and Review
- Write or update tests alongside behavioral changes; keep test coverage meaningful.
- Run relevant linters, type checks, and test suites locally before pushing.
- Document non-obvious decisions in code comments or design notes.
- Review AI-generated code for compliance with dependency policies and licensing.

## Security and Privacy
- Avoid sharing secrets, credentials, or internal tokens with AI systems.
- Sanitize logs and code snippets that could expose sensitive data before sharing.
- Validate AI output for security best practices (input validation, least privilege, safe defaults).

## Code Quality
- Prefer explicitness over magic; avoid cleverness that obscures intent.
- Adhere to existing naming conventions and file organization.
- Keep functions small and focused; refactor duplicated logic rather than copying.
- Ensure error handling is deliberate; surface actionable messages for operators.

## Communication
- Provide the AI with concise context: feature goal, constraints, and relevant files.
- Ask for alternatives when suggestions seem brittle or unclear.
- Summarize final changes in PR descriptions, highlighting risks and testing performed.

## Continuous Improvement
- Capture recurring AI missteps to refine prompts and guardrails.
- Share successful prompting patterns with the team to improve collaboration quality.
