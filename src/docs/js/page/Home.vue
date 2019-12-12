<template lang="pug">
	div
		mdc-grid
			mdc-grid-row
				mdc-grid-cell
					h1(v-typography="'headline3'") Material design components for Vue.js.
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ button }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Raised button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-raised-button
								mdc-tab-content(slot="content" v-text-center) 
									base-code(lang="html") {{ raisedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Unelevated button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-unelevated-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ unelevatedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-outlined-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ outlinedButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-disabled-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ disabledButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Dense button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-dense-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ denseButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button
								mdc-tab-content(slot="content")
									base-code(lang="html") {{ iconButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Trailing icon Button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-trailing-icon-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ trailingIconButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Button without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-button-without-ripple
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ buttonWithoutRipple }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only 
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnly }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Icon button only without ripple
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only-without-ripple
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnlyWithoutRipple }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled icon button only
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-icon-button-only-disabled
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ iconButtonOnlyDisabled }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-switches
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ switches }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Switch with custom labels
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-switch-with-custom-labels
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ switchWithCustomLabels }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Checked switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-switch-checked
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ switchChecked }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled switch
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-switch-disabled
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ switchDisabled }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Checkbox
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-checkbox
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ checkbox }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Radio
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-radio
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ radio }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Data list
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-data-table
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ dataTable }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									mdc-list
										example-mdc-list
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ list }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Two line List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-list-two-line
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listTwoLine }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List groups
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-list-group
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listGroup }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List dividers
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-list-divider
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listDivider }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Single Selection List
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-list-single-selection
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listSingleSelection }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Pre-selected list item
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-list-preselected-item
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listPreselectedItem }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List with radio group
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-list-radio-group
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listRadioGroup }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") List with checkbox items
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-list-checkbox-item
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ listCheckboxItem }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-snackbar
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ snackbar }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Stacked snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-snackbar-stacked
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ snackbarStacked }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Leading snackbar
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-snackbar-leading
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ snackbarLeading }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ card }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card-outlined
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ cardOutlined }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Rich media card
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card-rich-media
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ cardRichMedia }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card actions
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card-action
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ cardAction }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Card with actions icon and button
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card-action-icon-button
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ cardActionIconButton }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Combined example
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-card-combined-example
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ cardCombinedExample }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textField }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field with helper text
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-text-field-helper-text
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldHelperText }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text field without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-text-field-without-label
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldWithoutLabel }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Disabled text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-text-field-disabled
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldWithoutLabel }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field-outlined
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldOutlined }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Outlined text field without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field-outlined-without-label
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldOutlinedWithoutLabel }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Full width text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field-full-width
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldFullWidth }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text area text field
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field-text-area
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldTextArea }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Text area without label
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" v-text-center active)
									example-mdc-text-field-text-area-without-label
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ textFieldTextAreaWithoutLabel }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgress }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Reversed linear progress 
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-reverse
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressReverse }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Buffered linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-buffer
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressBuffer }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Reversed buffered linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-buffer-reverse
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressBufferReverse }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Fully buffered linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-buffer-full
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressBufferFull }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Undeterminate linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-undeterminate
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressUndeterminate }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Reversed undeterminate linear progress
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-linear-progress-undeterminate-reverse
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ linearProgressUndeterminateReverse }}
				mdc-grid-cell(desktop="4" tablet="4" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Dialog
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-dialog
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ dialog }}
				mdc-grid-cell(desktop="12" tablet="8" phone="4")
					mdc-card
						mdc-card-content
							h2(v-typography="'headline6'") Grid
						mdc-card-content(:padding="false")
							mdc-tab
								mdc-tab-item(icon="desktop_mac" active) Preview
								mdc-tab-item(icon="code") Code
								mdc-tab-content(slot="content" active)
									example-mdc-grid
								mdc-tab-content(slot="content" v-text-center)
									base-code(lang="html") {{ grid }}
		div
			br
</template>
<script>
import BaseCode from "../component/BaseCode.vue";
import MdcButton from "../../../js/MdcButton.vue";
import MdcCard from "../../../js/MdcCard.vue";
import MdcCardContent from "../../../js/MdcCardContent.vue";
import MdcList from "../../../js/MdcList.vue";
import MdcListItem from "../../../js/MdcListItem.vue";
import MdcGrid from "../../../js/MdcGrid.vue";
import MdcGridCell from "../../../js/MdcGridCell.vue";
import MdcGridRow from "../../../js/MdcGridRow.vue";
import MdcTab from "../../../js/MdcTab.vue";
import MdcTabContent from "../../../js/MdcTabContent.vue";
import MdcTabItem from "../../../js/MdcTabItem.vue";

import ExampleMdcButton from "../component/example/MdcButton.vue";
import ExampleMdcRaisedButton from "../component/example/MdcRaisedButton.vue";
import ExampleMdcUnelevatedButton from "../component/example/MdcUnelevatedButton.vue";
import ExampleMdcOutlinedButton from "../component/example/MdcOutlinedButton.vue";
import ExampleMdcDisabledButton from "../component/example/MdcDisabledButton.vue";
import ExampleMdcDenseButton from "../component/example/MdcDenseButton.vue";
import ExampleMdcIconButton from "../component/example/MdcIconButton.vue";
import ExampleMdcTrailingIconButton from "../component/example/MdcTrailingIconButton.vue";
import ExampleMdcButtonWithoutRipple from "../component/example/MdcButtonWithoutRipple.vue";
import ExampleMdcIconButtonOnly from "../component/example/MdcIconButtonOnly.vue";
import ExampleMdcIconButtonOnlyWithoutRipple from "../component/example/MdcIconButtonOnlyWithoutRipple.vue";
import ExampleMdcIconButtonOnlyDisabled from "../component/example/MdcIconButtonOnlyDisabled.vue";
import ExampleMdcSwitches from "../component/example/MdcSwitches.vue";
import ExampleMdcSwitchWithCustomLabels from "../component/example/MdcSwitchWithCustomLabels.vue";
import ExampleMdcSwitchChecked from "../component/example/MdcSwitchChecked.vue";
import ExampleMdcSwitchDisabled from "../component/example/MdcSwitchDisabled.vue";
import ExampleMdcCheckbox from "../component/example/MdcCheckbox.vue";
import ExampleMdcRadio from "../component/example/MdcRadio.vue";
import ExampleMdcDataTable from "../component/example/MdcDataTable.vue";
import ExampleMdcGrid from "../component/example/MdcGrid.vue";
import ExampleMdcList from "../component/example/MdcList.vue";
import ExampleMdcListTwoLine from "../component/example/MdcListTwoLine.vue";
import ExampleMdcListGroup from "../component/example/MdcListGroup.vue";
import ExampleMdcListDivider from "../component/example/MdcListDivider.vue";
import ExampleMdcListSingleSelection from "../component/example/MdcListSingleSelection.vue";
import ExampleMdcListPreselectedItem from "../component/example/MdcListPreselectedItem.vue";
import ExampleMdcListRadioGroup from "../component/example/MdcListRadioGroup.vue";
import ExampleMdcListCheckboxItem from "../component/example/MdcListCheckboxItem.vue";
import ExampleMdcCard from "../component/example/MdcCard.vue";
import ExampleMdcCardOutlined from "../component/example/MdcCardOutlined.vue";
import ExampleMdcCardRichMedia from "../component/example/MdcCardRichMedia.vue";
import ExampleMdcCardAction from "../component/example/MdcCardAction.vue";
import ExampleMdcCardActionIconButton from "../component/example/MdcCardActionIconButton.vue";
import ExampleMdcCardCombinedExample from "../component/example/MdcCardCombinedExample.vue";
import ExampleMdcTextField from "../component/example/MdcTextField.vue";
import ExampleMdcTextFieldHelperText from "../component/example/MdcTextFieldHelperText.vue";
import ExampleMdcTextFieldWithoutLabel from "../component/example/MdcTextFieldWithoutLabel.vue";
import ExampleMdcTextFieldDisabled from "../component/example/MdcTextFieldDisabled.vue";
import ExampleMdcTextFieldOutlined from "../component/example/MdcTextFieldOutlined.vue";
import ExampleMdcTextFieldOutlinedWithoutLabel from "../component/example/MdcTextFieldOutlinedWithoutLabel.vue";
import ExampleMdcTextFieldFullWidth from "../component/example/MdcTextFieldFullWidth.vue";
import ExampleMdcTextFieldTextArea from "../component/example/MdcTextFieldTextArea.vue";
import ExampleMdcTextFieldTextAreaWithoutLabel from "../component/example/MdcTextFieldTextAreaWithoutLabel.vue";
import ExampleMdcLinearProgress from "../component/example/MdcLinearProgress.vue";
import ExampleMdcLinearProgressReverse from "../component/example/MdcLinearProgressReverse.vue";
import ExampleMdcLinearProgressBuffer from "../component/example/MdcLinearProgressBuffer.vue";
import ExampleMdcLinearProgressBufferReverse from "../component/example/MdcLinearProgressBufferReverse.vue";
import ExampleMdcLinearProgressBufferFull from "../component/example/MdcLinearProgressBufferFull.vue";
import ExampleMdcLinearProgressUndeterminate from "../component/example/MdcLinearProgressUndeterminate.vue";
import ExampleMdcLinearProgressUndeterminateReverse from "../component/example/MdcLinearProgressUndeterminateReverse.vue";
import ExampleMdcSnackbar from "../component/example/MdcSnackbar.vue";
import ExampleMdcSnackbarStacked from "../component/example/MdcSnackbarStacked.vue";
import ExampleMdcSnackbarLeading from "../component/example/MdcSnackbarLeading.vue";
import ExampleMdcDialog from "../component/example/MdcDialog.vue";

import imageList from "../../../js/directive/image-list";
import ripple from "../../../js/directive/ripple";
import textCenter from "../../../js/directive/text-center";
import typography from "../../../js/directive/typography";

import examples from "../example";

import Prism from "prismjs";

import "prismjs/components/prism-sass";
import "prismjs/components/prism-javascript";

export default {
	data() {
		return examples;
	},
	components: {
		BaseCode,
		ExampleMdcButton,
		ExampleMdcRaisedButton,
		ExampleMdcUnelevatedButton,
		ExampleMdcOutlinedButton,
		ExampleMdcDisabledButton,
		ExampleMdcDenseButton,
		ExampleMdcIconButton,
		ExampleMdcTrailingIconButton,
		ExampleMdcButtonWithoutRipple,
		ExampleMdcIconButtonOnly,
		ExampleMdcIconButtonOnlyWithoutRipple,
		ExampleMdcIconButtonOnlyDisabled,
		ExampleMdcSwitches,
		ExampleMdcSwitchWithCustomLabels,
		ExampleMdcSwitchChecked,
		ExampleMdcSwitchDisabled,
		ExampleMdcCheckbox,
		ExampleMdcRadio,
		ExampleMdcDataTable,
		ExampleMdcGrid,
		ExampleMdcList,
		ExampleMdcListTwoLine,
		ExampleMdcListGroup,
		ExampleMdcListDivider,
		ExampleMdcListSingleSelection,
		ExampleMdcListPreselectedItem,
		ExampleMdcListRadioGroup,
		ExampleMdcCheckbox,
		ExampleMdcListCheckboxItem,
		ExampleMdcCard,
		ExampleMdcCardOutlined,
		ExampleMdcCardRichMedia,
		ExampleMdcCardAction,
		ExampleMdcCardActionIconButton,
		ExampleMdcCardCombinedExample,
		ExampleMdcTextField,
		ExampleMdcTextFieldHelperText,
		ExampleMdcTextFieldWithoutLabel,
		ExampleMdcTextFieldDisabled,
		ExampleMdcTextFieldOutlined,
		ExampleMdcTextFieldOutlinedWithoutLabel,
		ExampleMdcTextFieldFullWidth,
		ExampleMdcTextFieldTextArea,
		ExampleMdcTextFieldTextAreaWithoutLabel,
		ExampleMdcLinearProgress,
		ExampleMdcLinearProgressReverse,
		ExampleMdcLinearProgressBuffer,
		ExampleMdcLinearProgressBufferFull,
		ExampleMdcLinearProgressBufferReverse,
		ExampleMdcLinearProgressUndeterminate,
		ExampleMdcLinearProgressUndeterminateReverse,
		ExampleMdcSnackbar,
		ExampleMdcSnackbarStacked,
		ExampleMdcSnackbarLeading,
		ExampleMdcDialog,
		MdcButton,
		MdcCard,
		MdcCardContent,
		MdcList,
		MdcListItem,
		MdcGrid,
		MdcGridCell,
		MdcGridRow,
		MdcTab,
		MdcTabContent,
		MdcTabItem,
	},
	directives: {
		typography,
	},
	mounted() {
		Prism.highlightAll();
	},
};
</script>
<style lang="scss" scoped>
h1,
h2 {
	margin: 0px;
}
</style>
