# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# alert "I knew it!"

AddWidget = (target, widget) ->
  @target = target
  @widget = widget

  $( @target ).append ->
    alert('Inside function')
    "<%= render :partial => 'shared/left_col' %>"
