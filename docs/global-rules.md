# 🌐 Global Rules & Standards

## 📋 Project Overview

- **Project:** Guez VC - Satirical VC Website
- **Version:** 1.2
- **Status:** Phase 3 Complete ✅
- **Environment:** `guezvc` conda environment

## 🎯 Core Objectives

### Product Vision
Create a satirical VC website that parodies the pretentious startup ecosystem through an AI-powered chat interface, providing entertainment for developers and startup community members.

### Success Metrics
- User engagement: Average session duration > 3 minutes
- Viral sharing: Organic social media mentions
- Technical performance: Page load < 2 seconds
- User retention: Return visits within 7 days

## 🛠 Development Rules

### Code Standards

#### ✅ TypeScript Requirements
- [ ] Strict mode enabled
- [ ] All props and state properly typed
- [ ] No `any` types (use `unknown` if needed)
- [ ] Proper error handling with typed exceptions

#### ✅ Component Standards
- [ ] Use React hooks (no class components)
- [ ] Implement proper error boundaries
- [ ] Add loading and error states
- [ ] Include accessibility attributes (ARIA)
- [ ] Mobile-responsive design

#### ✅ Performance Checklist
- [ ] Initial page load < 2 seconds
- [ ] Time to interactive < 3 seconds
- [ ] API response time < 1 second
- [ ] Lighthouse score > 90
- [ ] Proper code splitting implemented

### Security Requirements

#### ✅ Input Validation
- [ ] Sanitize all user inputs
- [ ] Validate API request parameters
- [ ] Implement XSS protection
- [ ] Use Content Security Policy

#### ✅ API Security
- [ ] Rate limiting: 10-20 requests/minute per IP
- [ ] Environment variables for API keys
- [ ] No sensitive data in client-side code
- [ ] Proper error messages (no stack traces in production)

## 🎨 Design Standards

### Visual Consistency

#### ✅ Color System
- [ ] Use defined color palette from design system
- [ ] Maintain contrast ratios (WCAG AA)
- [ ] Mode-specific accent colors implemented
- [ ] Strategic chaos elements placed appropriately

#### ✅ Typography
- [ ] Use Inter font family consistently
- [ ] Implement defined text scale
- [ ] Proper line heights and spacing
- [ ] Readable font sizes on all devices

#### ✅ Animation Guidelines
- [ ] Respect `prefers-reduced-motion`
- [ ] Maintain 60fps performance
- [ ] Use liquid motion principles
- [ ] Strategic "glitch" effects for humor

### Responsive Design

#### ✅ Breakpoint Compliance
- [ ] Mobile: 320px - 768px (simplified experience)
- [ ] Tablet: 768px - 1024px (touch-friendly)
- [ ] Desktop: 1024px+ (full feature set)

#### ✅ Touch Interactions
- [ ] Minimum 44px touch targets
- [ ] Swipe gestures where appropriate
- [ ] Proper hover states for touch devices

## 🧪 Quality Assurance

### Testing Requirements

#### ✅ Unit Testing
- [ ] All utility functions tested
- [ ] Component rendering tests
- [ ] State management tests
- [ ] Error scenario coverage

#### ✅ Integration Testing
- [ ] API endpoint functionality
- [ ] Database operations
- [ ] Authentication flows
- [ ] Cross-component interactions

#### ✅ E2E Testing
- [ ] Complete user journeys
- [ ] Mobile device testing
- [ ] Cross-browser compatibility
- [ ] Performance benchmarks

### Code Quality

#### ✅ Linting & Formatting
- [ ] ESLint rules followed
- [ ] Prettier formatting applied
- [ ] No console.log in production
- [ ] Proper import organization

#### ✅ Documentation
- [ ] Component props documented
- [ ] API endpoints documented
- [ ] Complex logic commented
- [ ] README files updated

## 📝 Content Guidelines

### Satirical Tone

#### ✅ Humor Standards
- [ ] Maintain satirical but professional tone
- [ ] Reference real VC trends and buzzwords
- [ ] Keep content family-friendly
- [ ] Include self-aware humor breaks

#### ✅ AI Personality Consistency
- [ ] **Normal Mode:** Professional with subtle satire
- [ ] **Roast Mode:** Brutally honest but constructive
- [ ] **Calculator Mode:** Numbers-focused with dry humor

### User Experience

#### ✅ Interaction Patterns
- [ ] Clear call-to-action buttons
- [ ] Intuitive navigation flow
- [ ] Consistent interaction feedback
- [ ] Graceful error handling

## 🔄 Implementation Workflow

### Feature Development Process

1. **Planning**
   - [ ] Review global rules and design system
   - [ ] Check feature-specific documentation
   - [ ] Plan implementation approach
   - [ ] Consider accessibility and performance

2. **Development**
   - [ ] Implement in `guezvc` conda environment
   - [ ] Follow TypeScript and React best practices
   - [ ] Add comprehensive error handling
   - [ ] Include loading and empty states

3. **Testing**
   - [ ] Write unit tests for new functionality
   - [ ] Test responsive design on multiple devices
   - [ ] Verify accessibility standards
   - [ ] Check performance impact

4. **Review**
   - [ ] Code review for standards compliance
   - [ ] Design review against system guidelines
   - [ ] Security review for vulnerabilities
   - [ ] User experience validation

5. **Documentation**
   - [ ] Update relevant feature documentation
   - [ ] Add inline code comments
   - [ ] Update global rules if needed
   - [ ] Verify implementation respects PRD

### Deployment Checklist

#### ✅ Pre-Deployment
- [ ] All tests passing
- [ ] Performance benchmarks met
- [ ] Security audit completed
- [ ] Documentation updated

#### ✅ Post-Deployment
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Gather user feedback
- [ ] Plan iterative improvements

## 🚨 Critical Rules

### Never Compromise On
1. **User Privacy:** No data collection without consent
2. **Performance:** Sub-2-second load times
3. **Accessibility:** WCAG AA compliance
4. **Security:** Proper input validation and rate limiting
5. **Mobile Experience:** Full functionality on all devices

### Always Remember
- Stick to proposed elements in design system
- Update documentation after each implementation step
- Verify implementation respects global rules
- Ask for user improvements and feedback
- Run commands in `guezvc` conda environment

---

> **🎯 Golden Rule:** Every feature should delight users while maintaining the sophisticated-yet-satirical brand identity. 